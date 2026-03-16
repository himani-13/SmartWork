import React from "react";
import "../styles/dashboard.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h2>SmartWork Marketplace</h2>
        <p>Sign in to your account</p>

        <input type="email" placeholder="Email address" />

        <input type="password" placeholder="Password" />

        <button className="primary-btn">
          Sign In
        </button>

        <span className="link">
          Don't have an account? Register
        </span>

      </div>
    </div>
  );
}