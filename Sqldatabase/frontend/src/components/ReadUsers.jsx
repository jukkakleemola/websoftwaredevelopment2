import React, { useState, useRef } from "react";
import axios from "axios";


export default function ReadUsers({ users, setUsers }) {
  const [editUser, setEditUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedAge, setUpdatedAge] = useState("");
  const editRef = useRef(null); // Ref muokkauslomakkeelle

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err.message);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedAge(user.age);

    // Scrollaa muokkauslomakkeen kohdalle
    setTimeout(() => {
      editRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/users/${editUser.id}`, {
        name: updatedName,
        email: updatedEmail,
        age: updatedAge,
      });

      setUsers(users.map(user =>
        user.id === editUser.id
          ? { ...user, name: updatedName, email: updatedEmail, age: updatedAge }
          : user
      ));

      setEditUser(null);
    } catch (err) {
      console.error("Error updating user:", err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Users List</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} ({user.email}) - {user.age} v
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {editUser && (
        <div ref={editRef} className="mt-4 p-3 border rounded">
          <h3>Edit User</h3>
          <div className="mb-2">
            <input type="text" className="form-control" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
          </div>
          <div className="mb-2">
            <input type="email" className="form-control" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <input type="number" className="form-control" value={updatedAge} onChange={(e) => setUpdatedAge(e.target.value)} />
          </div>
          <button className="btn btn-success" onClick={handleUpdate}>Update</button>
          <button className="btn btn-secondary ms-2" onClick={() => setEditUser(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
