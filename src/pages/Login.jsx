import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login successful!");
      window.location.href = "/";
    } catch (err) {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <img
          src= "https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&w=800&q=80"



          alt="wellness"
          style={styles.heroImage}
        />

        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Log in to continue your wellness journey 💜</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}


const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #E8EAF6, #C5CAE9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },

  card: {
    background: "white",
    width: "90%",
    maxWidth: "450px",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  heroImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "26px",
    color: "#3F51B5",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "25px",
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
    padding: "12px",
    backgroundColor: "#5C6BC0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },

  error: {
    marginTop: "15px",
    color: "red",
    fontSize: "14px",
  },
};

export default Login;
