import React, { useState } from 'react';
import { useAuth } from '../../state/AuthContext';
import { FaUserCircle } from "react-icons/fa";
import './dashboard.css';

function ProfileAdmin() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || '',
    username: user?.username || '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSave = () => {

    console.log("Updated profile data:", formData);
    setIsModalOpen(false);
  };

  return (
    <div className="main-container">
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
            <button 
              className="btn-edit" 
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </button>
          </div>
          
          <div className="profile-main">
            <h2>About</h2>
            <p>
              This is your Zoomy profile page. Here you can manage your account,
              view your role permissions, and access personalized content.
            </p>

            <h2>Recent Activity</h2>
            <div className="activity-card">No activity yet.</div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Edit Profile</h2>
              <label>
                Username:
                <input 
                  type="text" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                />
              </label>
              <label>
                Password:
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange}
                />
              </label>
              <div className="modal-actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProfileAdmin;
