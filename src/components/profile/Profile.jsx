import React, { useState } from "react";
import "./Profile.css";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../state/AuthContext";
import Roadmaps from "../dashboard/Roadmaps";
import Tasks from "../dashboard/Tasks";

function Profile() {
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.name || "",
    email: user?.email || "",
    password: "",
  });

  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="profile-avatar">
          <FaUserCircle />
        </div>
        <div className="profile-info">
          <h1 className="profile-title">{user?.email}</h1>
          <p className="profile-role">{user?.role}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <h2>Profile Info</h2>
          <ul>
            <li>Email: {user?.email}</li>
            <li>Role: {user?.role}</li>
          </ul>
          <button onClick={() => setIsEditing(true)} className="btn-edit">
            Edit Profile
          </button>
        </div>

        <div className="profile-main">
          <h2>About</h2>
          <p>This is your Zoomy profile page...</p>

          {user?.role?.toLowerCase() === "intern" && (
            <>
            <div className="profile-sections">
              <div className="roadmaps-section">
                <Roadmaps readOnly={true} />
              </div>
              <div className="tasks-section">
                <Tasks readOnly={true} filterByUser={user?.name} />
              </div>
              </div>
            </>
          )}
        </div>
      </div>
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Profile</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(false);
              }}
            >
              <label>Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />

              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <div className="modal-buttons">
                <button style={{color:"blue"}} type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
