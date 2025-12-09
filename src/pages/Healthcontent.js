import React, { useState } from "react";
import axios from "axios";

function HealthContentPage() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async () => {
    if (!keyword.trim()) {
      setError("Please enter a health topic to search.");
      return;
    }

    setLoading(true);
    setError("");

    try {
        const res = await axios.get(`http://localhost:8080/api/health/search`, {
        params: { keyword },
      });

      setResults(res.data.Result?.Resources?.Resource || []);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Explore Health Topics</h1>
        <p style={styles.subtitle}>
          Search trusted health information from Health.gov and boost your wellbeing 💜  
        </p>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Enter a topic (e.g., stress, heart health)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={styles.input}
          />
          <button onClick={search} style={styles.button}>
            Search
          </button>
        </div>

        {loading && <p style={styles.loading}>Searching…</p>}
        {error && <p style={styles.error}>{error}</p>}

        {/* Results */}
        <div style={styles.resultsContainer}>
          {results.map((topic) => (
            <div key={topic.Id} style={styles.resultCard}>
              <h2 style={styles.resultTitle}>{topic.Title}</h2>

              {topic.ImageUrl && (
                <img
                  src={topic.ImageUrl}
                  alt={topic.ImageAlt || topic.Title}
                  style={styles.image}
                />
              )}

              <a
                href={topic.AccessibleVersion}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Read Full Topic →
              </a>
            </div>
          ))}
        </div>
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
    padding: "30px",
  },

  card: {
    background: "white",
    width: "100%",
    maxWidth: "900px",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "700",
    color: "#3F51B5",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "15px",
    color: "#555",
    marginBottom: "25px",
  },

  searchContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
  },

  input: {
    width: "70%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  button: {
    padding: "12px 20px",
    backgroundColor: "#5C6BC0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },

  loading: {
    textAlign: "center",
    color: "#3F51B5",
  },

  error: {
    textAlign: "center",
    color: "red",
    marginTop: "10px",
  },

  resultsContainer: {
    marginTop: "20px",
  },

  resultCard: {
    backgroundColor: "#F8F9FF",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  resultTitle: {
    color: "#3F51B5",
    marginBottom: "10px",
  },

  image: {
    maxWidth: "300px",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#3949AB",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default HealthContentPage;
