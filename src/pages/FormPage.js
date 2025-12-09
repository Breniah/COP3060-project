import { useState } from "react";
import apiClient from "../api/apiClient";

export default function FormPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { title, body };

    apiClient
      .post("/content", newItem)
      .then(() => {
        alert("Reflection saved!");
        setTitle("");
        setBody("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
          alt="mindfulness"
          style={styles.heroImage}
        />

        <h1 style={styles.title}>Daily Reflection</h1>
        <p style={styles.subtitle}>
          Take a moment to check in with yourself.  
          Write your thoughts, feelings, or anything you want to reflect on.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="text"
            placeholder="Entry Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />

          <textarea
            placeholder="Write your thoughts here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit" style={styles.button}>
            Save Reflection
          </button>
        </form>

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
    maxWidth: "600px",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  heroImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#3F51B5",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "25px",
    lineHeight: "1.5",
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
    width: "100%",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "140px",
    width: "100%",
  },

  button: {
    padding: "14px",
    backgroundColor: "#5C6BC0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },
};
