import http from "k6/http"; // Import the HTTP module for making API requests
import { check, sleep } from "k6"; // Import utilities for assertions and pauses
import { Trend, Rate } from "k6/metrics"; // Import custom metrics for tracking trends and failure rates

// Define custom metrics
let responseTimeTrend = new Trend("response_time"); // Track response time over time
let successRate = new Rate("success_rate"); // Track success rate

// Define the load test options
export let options = {
    stages: [
        { duration: "30s", target: 50 }, // Ramp up to 50 virtual users over 30 seconds
        { duration: "1m", target: 50 },  // Keep 50 virtual users active for 1 minute
        { duration: "10s", target: 0 },  // Gradually scale down to 0 users over 10 seconds
    ],
    thresholds: {
        "response_time": ["p(95)<500"], // Ensure 95% of responses are under 500ms
        "success_rate": ["rate>0.95"],  // Ensure at least 95% of requests succeed
    }
};

/**
 * Default function executed by each virtual user (VU).
 * Each VU runs this function repeatedly during the test.
 */
export default function () {
    // Send a GET request to fetch the list of users
    let res = http.get("http://localhost:3000/users");

    // Validate the response with assertions
    check(res, {
        "status is 200": (r) => r.status === 200, // Ensure the response status is 200 OK
        "response time is < 500ms": (r) => r.timings.duration < 500, // Ensure the request completes in under 500ms
    });
    // Track the response time for trend analysis
    responseTimeTrend.add(res.timings.duration);

    // Send a POST request to create a new user (simulate a form submission)
    let payload = JSON.stringify({ name: "John Doe", email: "johndoe@example.com" });
    let headers = { "Content-Type": "application/json" };
    let postRes = http.post("http://localhost:3000/users", payload, { headers: headers });

    // Validate the POST request response
    check(postRes, {
        "status is 201": (r) => r.status === 201, // Ensure the POST request succeeds with status 201
        "response time is < 500ms": (r) => r.timings.duration < 500, // Ensure the request completes in under 500ms
    });
    successRate.add(postRes.status === 201); // Track POST success rate

    // Simulate a login request (POST to authenticate user)
    let loginPayload = JSON.stringify({ username: "testuser", password: "password123" });
    let loginRes = http.post("http://localhost:3000/login", loginPayload, { headers: headers });

    // Validate login response
    check(loginRes, {
        "status is 200": (r) => r.status === 200, // Ensure login returns status 200
        "response contains token": (r) => r.body.includes("token"), // Ensure a token is returned in the response body
    });
    successRate.add(loginRes.status === 200); // Track login success rate

    // Simulate fetching a single user's details
    let userRes = http.get("http://localhost:3000/users/1");

    // Validate GET request for a specific user
    check(userRes, {
        "status is 200": (r) => r.status === 200, // Ensure the response status is 200 OK
        "response time is < 500ms": (r) => r.timings.duration < 500, // Ensure the request completes in under 500ms
        "response contains user data": (r) => r.body.includes("John Doe"), // Validate the response contains expected data
    });

    // Pause for 1 second before the next iteration to simulate real user behavior
    sleep(1);
}
