import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Create a CSS file for styling

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default Signup;
