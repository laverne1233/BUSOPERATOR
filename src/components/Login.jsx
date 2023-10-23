import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import loginImage from './assets/loginImage.png';
import googleLogin from './assets/googleLogin.png';
import LOGO from './assets/LOGO.png';

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demonstration purposes, let's directly set the user as logged in
    setLoggedIn(true);
    navigate('/dashboard');
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }); // Add this line
  
    try {
      await signInWithPopup(auth, provider);
      setLoggedIn(true); // Set the user as logged in
  
      // Redirect to the dashboard or other page
      navigate('/dashboard');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
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
          <div className="forgot-password">
            <button type="button">Forgot the password?</button>
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="signup">
          <p>
            Don't have an account?{' '}
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
      </div>
    </div>
  );
};

export default Login;
