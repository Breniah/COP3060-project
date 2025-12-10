import React, { useState } from "react";
import axios from "axios";

export default function SelfCarePage() {
  const [activity, setActivity] = useState("");
  const [loading, setLoading] = useState(false);

  const getActivity = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/affirmation");
      setActivity(response.data.affirmation);
    } catch (error) {
      console.log("API ERROR:", error);
      setActivity("Unable to fetch an affirmation. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> Self-Care Activity</h1>
      <p style={styles.subtitle}>
        Click below to receive a calming affirmation to improve your wellness.
      </p>

      <button 
        onClick={getActivity} 
        style={styles.button}
        disabled={loading}
      >
        {loading ? "Loading..." : "Generate Affirmation"}
      </button>

      {activity && (
        <div style={styles.card}>
          <p style={styles.activityText}>{activity}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    margin: "40px auto",
    maxWidth: "600px",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#4A5FC1",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "25px",
  },

  button: {
    padding: "12px 20px",
    fontSize: "18px",
    backgroundColor: "#5C6BC0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },

  card: {
    marginTop: "30px",
    backgroundColor: "#F4F6FF",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  activityText: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
  },
};
