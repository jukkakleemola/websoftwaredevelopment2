import { useState, useEffect } from "react";
import axios from "axios";
import CreateUser from "./components/CreateUser.jsx";
import ReadUsers from "./components/ReadUsers.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [users, setUsers] = useState([]);

  // Haetaan käyttäjät, kun sovellus käynnistyy
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Käyttäjä Hallinta</h1>
      
      <div className="card p-4 shadow-sm">
        <CreateUser setUsers={setUsers} />
      </div>

      <div className="card p-4 shadow-sm mt-3">
        <ReadUsers users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
