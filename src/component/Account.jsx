import React, { useState, useEffect } from 'react';
import './Account.css';

const Account = ({ username, onLogout }) => {
  const [userDetails, setUserDetails] = useState({
    username: username || '',
    email: 'user@example.com', // Replace with actual email
    joinDate: new Date().toLocaleDateString(),
    lastLogin: new Date().toLocaleString()
  });

  useEffect(() => {
    // If no username, redirect to login
    if (!username) {
      window.location.href = '/login';
    }
  }, [username]);

  const handleLogout = () => {
    onLogout();
    window.location.href = '/login';
  };

  return (
    <div className="account-container">
      <div className="account-card">
        <div className="account-header">
          <div className="profile-avatar">
            {userDetails.username ? userDetails.username[0].toUpperCase() : ''}
          </div>
          <h2>Welcome, {userDetails.username}!</h2>
        </div>

        <div className="account-details">
          <div className="detail-item">
            <i className="fas fa-user"></i>
            <div className="detail-content">
              <label>Username</label>
              <p>{userDetails.username}</p>
            </div>
          </div>

          <div className="detail-item">
            <i className="fas fa-envelope"></i>
            <div className="detail-content">
              <label>Email</label>
              <p>{userDetails.email}</p>
            </div>
          </div>

          <div className="detail-item">
            <i className="fas fa-calendar"></i>
            <div className="detail-content">
              <label>Member Since</label>
              <p>{userDetails.joinDate}</p>
            </div>
          </div>

          <div className="detail-item">
            <i className="fas fa-clock"></i>
            <div className="detail-content">
              <label>Last Login</label>
              <p>{userDetails.lastLogin}</p>
            </div>
          </div>
        </div>

        <div className="account-actions">
          <button 
            className="edit-profile-btn"
            onClick={() => {/* Add edit profile functionality */}}
          >
            Edit Profile
          </button>
          <button 
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;