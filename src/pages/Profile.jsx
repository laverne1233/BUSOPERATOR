import React, { useState } from 'react';

const Profile = () => {
  // State variables to store input values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Event handlers to update state on input changes
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContactNumberChange = (e) => setContactNumber(e.target.value);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  return (
    <div>
      <p className="bus-heading">Profile</p>
      <div className="profile-form-container">
        <div className="profile-form-left">
          <form>
            <div className="profile-form-group">
              <label htmlFor="full-name">Full Name:</label>
              <input type="text" id="full-name" value={fullName} onChange={handleFullNameChange} />
            </div>
            <div className="profile-form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
          </form>
        </div>
        <div className="profile-form-right">
          <form>
            <div className="profile-form-group">
              <label htmlFor="contact-number">Contact number:</label>
              <input type="text" id="contact-number" value={contactNumber} onChange={handleContactNumberChange} />
            </div>
            <div className="profile-form-group">
              <label htmlFor="company-name">Company Name:</label>
              <input type="text" id="company-name" value={companyName} onChange={handleCompanyNameChange} />
            </div>
          </form>
        </div>
      </div>
      <p className="bus-heading">Password</p>
      <div className="password-form-container">
        <div className="password-form">
          <form>
            <div className="password-form-group">
              <label htmlFor="old-password">Old Password:</label>
              <input type="password" id="old-password" value={oldPassword} onChange={handleOldPasswordChange} />
            </div>
            <div className="password-form-group">
              <label htmlFor="new-password">New Password:</label>
              <input type="password" id="new-password" value={newPassword} onChange={handleNewPasswordChange} />
            </div>
            <div className="password-form-group">
              <label htmlFor="confirm-password">Confirm New Password:</label>
              <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
          </form>
        </div>
      </div>
      <div className="update-button-container">
        <button className="update-button">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
