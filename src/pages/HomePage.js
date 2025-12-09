export default function HomePage() {
  return (
    <div style={styles.page}>
      
      <div style={styles.card}>
        <img 
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
          alt="wellness"
          style={styles.heroImage}
        />

        <h1 style={styles.title}>MindBalance Wellness App</h1>

        <p style={styles.description}>
          Your personal space for mindfulness, reflection, and emotional clarity.
          Track your thoughts, log daily reflections, and stay in tune with your mental wellbeing.
        </p>

        <button 
  style={styles.ctaButton}
  onClick={() => (window.location.href = "/form")}
>
  Get Started
</button>

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
    backgroundColor: "white",
    width: "90%",
    maxWidth: "600px",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  heroImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#3F51B5",
  },

  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
    lineHeight: "1.6",
  },

  ctaButton: {
    backgroundColor: "#5C6BC0",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.2s",
  },
};
