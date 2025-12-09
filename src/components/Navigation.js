import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>MindWellness</Link>
      </div>

      <div style={styles.right}>
        
        {!token ? (
          // If NOT logged in
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        ) : (
          // If LOGGED IN
          <>
            <Link to="/data" style={styles.link}>Data</Link>
            <Link to="/form" style={styles.link}>Form</Link>
            <Link to="/health" style={styles.link}>Health Tips</Link>

            {/* Profile Avatar */}
            <img 
              src="https://i.pravatar.cc/40?img=48"
              alt="profile"
              style={styles.avatar}
            />

            <button onClick={logout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#5C6BC0",
    padding: "12px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
  },

  left: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  link: {
    color: "white",
    fontSize: "16px",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "0.2s",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid white",
  },

  logoutButton: {
    backgroundColor: "white",
    color: "#5C6BC0",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },
};
