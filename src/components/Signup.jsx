import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from './assets/loginImage.png';
import LOGO from './assets/LOGO.png';
// import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../firebaseConfig';
import { collection, addDoc } from '@firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types'; // Import PropTypes


const Signup = ({ setLoggedIn }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [userType, setUserType] = useState('busOperator');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();

  
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
  
      // Wait for the authentication state to stabilize
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          // Create a Firestore document to store user information
          const usersCollection = collection(db, 'users');
          console.log(usersCollection);
          const userData = {
            fullName,
            email,
            userType,
            contactNumber,
            // ... other user data
          };
  
          // Add the user profile to Firestore
          const userDocRef = await addDoc(usersCollection, {
            uid: user.uid,
            ...userData,
          });
  
          console.log('User Profile Created:', userDocRef.id);
  
          setLoggedIn(true);
          navigate('/dashboard');
  
          // Unsubscribe the listener to avoid memory leaks
          unsubscribe();
        }
      });
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };


  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleTermsCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div className="login-form">
        <img src={LOGO} alt="Logo" className="LOGO-image" />
        <h2>Welcome to BusYan</h2>
        <p>Create your account</p>
        <form>
          <div>
            <label>User type: </label>
            <label>
              <input
                type="radio"
                value="busOperator"
                checked={userType === 'busOperator'}
                onChange={handleUserTypeChange}
              />
              Bus Operator 
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={userType === 'admin'}
                onChange={handleUserTypeChange}
              />
               Admin
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
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
          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <select
              id="signupCountryCode"
              value={countryCode}
              onChange={handleCountryCodeChange}
              style={{ width: '50px' }}
            >
              <option value="+1">+63 (Philippines)</option>
              <option value="+1">+1 (United States)</option>
              <option value="+44">+44 (United Kingdom)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="smaller-font">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={handleTermsCheckboxChange}
              />
              By checking the box you agree to our{' '}
              <Link to="/terms" style={{ color: 'blue' }}>
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button className="signup-button" onClick={handleSignup}>
            Sign Up
          </button>
        </form>
        <p className="already">Already have an account? <Link to="/">Sign In</Link></p>
      </div>
    </div>
  );
};
Signup.propTypes = {
  setLoggedIn: PropTypes.func, // Prop validation for setLoggedIn function
};

export default Signup;
