import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

export default function DataDisplayPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient
      .get("/content")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <h1>Your Logged Entries</h1>

      {data.map((item) => (
        <div key={item.id} className="content-item">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}


