import React, { useState } from "react";
import axios from "axios";

function HealthContentPage() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const search = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get(`/api/health/search`, {
                params: { keyword }
            });

            // Health.gov returns data in res.data.Result.Resources.Resource
            setResults(res.data.Result.Resources.Resource || []);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Health.gov Content Search</h1>
            <input
                type="text"
                placeholder="Enter health topic (e.g., heart)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={search} style={{ marginLeft: "10px" }}>
                Search
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div style={{ marginTop: "20px" }}>
                {results.map((topic) => (
                    <div key={topic.Id} style={{ marginBottom: "30px" }}>
                        <h2>{topic.Title}</h2>
                        {topic.ImageUrl && (
                            <img
                                src={topic.ImageUrl}
                                alt={topic.ImageAlt || topic.Title}
                                style={{ maxWidth: "300px", display: "block", marginBottom: "10px" }}
                            />
                        )}
                        <a href={topic.AccessibleVersion} target="_blank" rel="noopener noreferrer">
                            Read Full Topic
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HealthContentPage;

