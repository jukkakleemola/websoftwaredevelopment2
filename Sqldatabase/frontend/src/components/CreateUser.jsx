import React, { useState } from "react";
import axios from "axios";


export default function CreateUser({ setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        age,
      });

      setUsers((prevUsers) => [...prevUsers, response.data]);
      setMessage(`User created: ${response.data.name}`);
      setName("");
      setEmail("");
      setAge("");
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}
