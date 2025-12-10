import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

export default function DataDisplayPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit states
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

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

 
  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/content/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Could not delete entry.");
    }
  };

 
  const startEdit = (item) => {
    setEditId(item.id);
    setEditTitle(item.title);
    setEditBody(item.body);
  };


  const handleUpdate = async () => {
    try {
      const res = await apiClient.put(`/content/${editId}`, {
        title: editTitle,
        body: editBody,
      });

      setData(data.map((item) => (item.id === editId ? res.data : item)));

    
      setEditId(null);
      setEditTitle("");
      setEditBody("");
    } catch (error) {
      console.error("Update error:", error);
      alert("Could not update entry.");
    }
  };

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
            {editId === item.id ? (
              <>
                {/* EDIT MODE */}
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={styles.input}
                />
                <textarea
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                  style={styles.textarea}
                />

                <button onClick={handleUpdate} style={styles.saveBtn}>
                  Save Changes
                </button>
                <button
                  onClick={() => setEditId(null)}
                  style={styles.cancelBtn}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {/* NORMAL VIEW */}
                <h3 style={styles.entryTitle}>📝 {item.title}</h3>
                <p style={styles.entryBody}>{item.body}</p>

                <div style={styles.buttonRow}>
                  <button
                    onClick={() => startEdit(item)}
                    style={styles.editBtn}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
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

  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  editBtn: {
    backgroundColor: "#5C6BC0",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  deleteBtn: {
    backgroundColor: "#d9534f",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },

  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },

  saveBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "8px",
  },

  cancelBtn: {
    backgroundColor: "#9E9E9E",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
