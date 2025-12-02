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
        alert("Entry added!");
        setTitle("");
        setBody("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="page-container">
      <h1>Add New Entry</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter body..."
          rows="4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
