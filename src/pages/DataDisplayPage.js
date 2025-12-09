import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

export default function DataDisplayPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get("/content")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingPage}>
        <p style={styles.loadingText}>Loading your reflections… 💭</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Your Journal Entries</h1>

        <p style={styles.subtitle}>
          Here are all the thoughts, reflections, and moments you've chosen to record.
        </p>

        {data.length === 0 && (
          <p style={styles.emptyMessage}>
            You haven't written anything yet.  
            Start your first reflection on the <strong>Form</strong> page!
          </p>
        )}

        {data.map((item) => (
          <div key={item.id} style={styles.entryCard}>
            <h3 style={styles.entryTitle}>📝 {item.title}</h3>
            <p style={styles.entryBody}>{item.body}</p>
          </div>
        ))}
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
    alignItems: "flex-start",
    padding: "40px",
  },

  loadingPage: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #E8EAF6, #C5CAE9)",
  },

  loadingText: {
    fontSize: "20px",
    color: "#3F51B5",
  },

  card: {
    background: "white",
    width: "100%",
    maxWidth: "700px",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  title: {
    fontSize: "28px",
    color: "#3F51B5",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "25px",
  },

  emptyMessage: {
    fontSize: "16px",
    color: "#444",
    marginTop: "20px",
  },

  entryCard: {
    backgroundColor: "#F8F9FF",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "left",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },

  entryTitle: {
    fontSize: "20px",
    color: "#3F51B5",
    marginBottom: "8px",
  },

  entryBody: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.6",
  },
};
