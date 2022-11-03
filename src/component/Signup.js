import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/userSlice";



import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("sdasda");
    dispatch(
      signup({
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    navigate("/login");
  };

  return (
    <div className="login">
      <h1>Create new Account</h1>
      <input
        type="name"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
        {/* <Link to="/action"></Link> */}
        Signup
      </button>

      <h4>Already Have a Account?</h4>
      <button className="btn-sign" onClick={handleSubmit}>
        Sign In
      </button>
    </div>
  );
};

export default Signup;
