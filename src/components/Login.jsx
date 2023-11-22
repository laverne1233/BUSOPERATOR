import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import loginImage from './assets/loginImage.png';
import googleLogin from './assets/googleLogin.png';
import LOGO from './assets/LOGO.png';
import PropTypes from 'prop-types';

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle basic login logic, e.g., using Firebase authentication
    // For demonstration purposes, set the user as logged in directly
    setLoggedIn(true);
    navigate('/dashboard');
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      await signInWithPopup(auth, provider);
      setLoggedIn(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleAdditionalInfoSubmit = () => {
    // Handle the submission of additional information, e.g., saving it to Firestore
    // Make an API call to save additionalInfo to your database
    // Then, set the user as logged in
    setLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div className="login-form">
        <img src={LOGO} alt="Logo" className="LOGO-image" />
        <h2>Welcome to BusYan</h2>
        <p>Enter your account</p>
        <form>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {additionalInfo ? (
            <div className="input-container">
              <input
                type="text"
                placeholder="Additional Information"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </div>
          ) : null}
          <div className="forgot-password">
            <button type="button">Forgot the password?</button>
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="signup">
          <p>
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign up
            </button>
          </p>
        </div>
        <p>___________________or___________________</p>
        <div className="image-buttons">
          <button type="button" className="image-button" onClick={handleGoogleLogin}>
            <img src={googleLogin} alt="google" />
          </button>
        </div>
        {additionalInfo && (
          <div>
            <button className="login-button" onClick={handleAdditionalInfoSubmit}>
              Submit Additional Info
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Login;
