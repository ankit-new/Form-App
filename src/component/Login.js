import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log('sdasda');
    dispatch(
      login({
        email,
        password,
        loggedIn: true,
      }),
    );
  };

  return (
    <div className="login">
      <h1>Login Now</h1>

      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}

export default Login;
