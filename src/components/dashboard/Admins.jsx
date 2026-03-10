import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./dashboard.css";

function Admins() {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [itemPerPage, setItemPerPage] = useState(7);

const [admins, setAdmins] = useState(() => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.filter(u => u.role.toLowerCase() === "admin");
});


  const [newAdmin, setNewAdmin] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editData, setEditData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("admins", JSON.stringify(admins));
    localStorage.setItem("adminsCount", admins.length.toString());
  }, [admins]);

  const handleAddAdmin = () => {
    if (!newAdmin.username || !newAdmin.email || !newAdmin.password) {
      alert("Please fill all fields!");
      return;
    }

    const newId = Date.now();

    const adminToAdd = {
      id: newId,
      username: newAdmin.username,
      email: newAdmin.email,
      password:newAdmin.password,
      role: "admin",
    }; 

    const updatedAdmins = [...admins, adminToAdd];
    setAdmins(updatedAdmins);
    setNewAdmin({ username: "", email: "", password: "" });

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(adminToAdd);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleDeleteAdmin = (id) => {
    const updatedAdmins = admins.filter((admin) => admin.id !== id);
    setAdmins(updatedAdmins);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.filter((u) => u.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const startEditing = (admin) => {
    setEditingAdmin(admin);
    setEditData({
      username: admin.username,
      email: admin.email,
      password: "",
    });
  };

  const handleSaveEdit = () => {
    const updatedAdmins = admins.map((admin) =>
      admin.id === editingAdmin.id
        ? {
            ...admin,
            username: editData.username,
            email: editData.email,
          }
        : admin
    );
    setAdmins(updatedAdmins);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.id === editingAdmin.id
        ? {
            ...u,
            username: editData.username,
            email: editData.email,
          }
        : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEditingAdmin(null);
    setEditData({ username: "", email: "", password: "" });
  };

  const closeEditModal = () => {
    setEditingAdmin(null);
    setEditData({ username: "", email: "", password: "" });
  };

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const thisPageItems = admins.slice(firstItemIndex, lastItemIndex);

  const pages = [];
  for (let i = 1; i <= Math.ceil(admins.length / itemPerPage); i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="main-container">
      <div className="title">Admins List :</div>
      <div className="admins-container">
        <div className="list-admins">
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "30%" }}>Email</th>
                <th style={{ width: "8%" }}>Edit</th>
                <th style={{ width: "8%" }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {admins.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No admins found
                  </td>
                </tr>
              ) : (
                thisPageItems.map((admin) => (
                  <tr key={admin.id}>
                    <td>{admin.username}</td>
                    <td>{admin.email}</td>
                    <td>
                      <FaEdit
                        className="icon-edit"
                        onClick={() => startEditing(admin)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                    <td>
                      <FaTrashAlt
                        className="icon-delete"
                        onClick={() => handleDeleteAdmin(admin.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="add-admin">
          <h1 style={{ fontSize: "25px" }}>Add a new admin :</h1>
          <input
            type="text"
            className="add-admin-input"
            required
            placeholder="Username"
            value={newAdmin.username}
            onChange={(e) =>
              setNewAdmin({ ...newAdmin, username: e.target.value })
            }
          />
          <input
            type="email"
            className="add-admin-input"
            required
            placeholder="Email"
            value={newAdmin.email}
            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          />
          <input
            type="password"
            className="add-admin-input"
            required
            placeholder="Password"
            value={newAdmin.password}
            onChange={(e) =>
              setNewAdmin({ ...newAdmin, password: e.target.value })
            }
          />
          <div className="add-admin-button" onClick={handleAddAdmin}>
            Add
          </div>
        </div>
      </div>

      {editingAdmin && (
  <div className="modal-overlay" onClick={closeEditModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>Edit Admin</h3>
      <input
        type="text"
        placeholder="Username"
        value={editData.username}
        onChange={(e) => setEditData({ ...editData, username: e.target.value })}
      />
      <input
        type="email"            
        placeholder="Email"     
        value={editData.email}  
        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password (leave blank to keep unchanged)"
        value={editData.password}
        onChange={(e) => setEditData({ ...editData, password: e.target.value })}
      />
      <div className="modal-actions">
        <button className="btn-primary" onClick={handleSaveEdit}>Save</button>
        <button className="btn-secondary" onClick={closeEditModal}>Cancel</button>
      </div>
    </div>
  </div>
)}


      <nav style={{ position: "fixed", bottom: "30px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          &lt;
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === pages.length}>
          &gt;
        </button>
      </nav>
    </div>
  );
}

export default Admins;
