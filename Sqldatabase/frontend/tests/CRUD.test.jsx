import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import CreateUser from "../src/components/CreateUser";
import ReadUsers from "../src/components/ReadUsers";
import axios from "axios";
import { waitFor } from "@testing-library/react";


vi.mock("axios");

describe("CreateUser Component", () => {
  it("renders correctly", () => {
    render(<CreateUser setUsers={() => {}} />);
    expect(screen.getByText("Create User")).toBeInTheDocument();
  });

  it("submits user data and updates state", async () => {
    const setUsersMock = vi.fn();
    axios.post.mockResolvedValue({ data: { id: 1, name: "John", email: "john@example.com", age: 30 } });

    render(<CreateUser setUsers={setUsersMock} />);
    
    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: 30 } });
    fireEvent.click(screen.getByText("Create"));

    await screen.findByText("User created: John");
    expect(setUsersMock).toHaveBeenCalled();
  });
});

describe("ReadUsers Component", () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 28 },
  ];

  it("renders user list", () => {
    render(<ReadUsers users={users} setUsers={() => {}} />);
    expect(screen.getByText("Users List")).toBeInTheDocument();
    expect(screen.getByText("Alice (alice@example.com) - 25 v")).toBeInTheDocument();
    expect(screen.getByText("Bob (bob@example.com) - 28 v")).toBeInTheDocument();
  });

  it("deletes a user", async () => {
    const setUsersMock = vi.fn();
    axios.delete.mockResolvedValue({});

    render(<ReadUsers users={users} setUsers={setUsersMock} />);
    console.log(screen.getAllByText("Delete").length);

    fireEvent.click(screen.getAllByText("Delete")[0]);

    await waitFor(() => expect(setUsersMock).toHaveBeenCalled());

  });

  it("edits a user", async () => {
    const setUsersMock = vi.fn();
    render(<ReadUsers users={users} setUsers={setUsersMock} />);

    fireEvent.click(screen.getAllByText("Edit")[0]);
    expect(screen.getByText("Edit User")).toBeInTheDocument();
  });
});
