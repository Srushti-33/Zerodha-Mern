import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {api} from "../../api";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show message but still continue
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match (still redirecting to home)");
      navigate("/"); // ✅ go home anyway
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data } = await api.post("/api/auth/signup", {
      email: formData.email,
      password: formData.password,
      username: formData.username,
});


      // even if success false, still go home
      if (data?.token) localStorage.setItem("token", data.token);
      if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/"); // ✅ always home
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed (still redirecting)");
      navigate("/"); // ✅ still home even on error
    } finally {
      setLoading(false);
    }
  };

  return (
        <div className="auth-container">
      <div className="auth-card">
        <h2 className="form-title">Create Zerodha Account</h2>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="email">Email</label>
            <input id="email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="auth-form-group">
            <label htmlFor="username">Username</label>
            <input id="username"
              type="text"
              name="username"
              value={formData.username}
              placeholder="Choose a username"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="auth-form-group">
            <label htmlFor="password">Password</label>
            <input id="password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Create a password"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="auth-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm your password"
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="terms">
            By creating an account, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );


};

export default Signup;
