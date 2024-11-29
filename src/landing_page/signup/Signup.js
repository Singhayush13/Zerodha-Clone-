import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/auth/login" : "/auth/signup";
    try {
      const response = await axios.post(`http://localhost:3002${endpoint}`, formData, {
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        window.location.href = "http://localhost:3000"; // Redirect to dashboard
      }
    } catch (err) {
      console.error(err.response?.data?.message || "Something went wrong");
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card border-0 shadow-lg" style={{ maxWidth: "28rem" }}>
        <div className="card-body p-5">
          <h3 className="card-title text-center mb-4">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control rounded-pill"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 rounded-pill py-2"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              className="btn btn-link text-decoration-none"
              onClick={toggleForm}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
