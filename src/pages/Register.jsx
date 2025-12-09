import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register form submitted");
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        fullName,
        email,
        password,
      });

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

    } catch (err) {
      setError("Registration failed. Email may already exist.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Your Account</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        /><br/><br/>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default Register;


const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #E8EAF6, #C5CAE9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "white",
    width: "90%",
    maxWidth: "450px",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    color: "#3F51B5",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#555",
    fontSize: "15px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "14px",
    backgroundColor: "#5C6BC0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: "15px",
  },
};
