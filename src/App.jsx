import React, { useState } from "react";
import authors from "./authors.json";

function App() {
  const [author, setAuthor] = useState(null);
  const [quoteCount, setQuoteCount] = useState(0); // New state for quote count

  const getRandomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * authors.length);
    setAuthor(authors[randomIndex]);
    setQuoteCount(quoteCount + 1); // Increment quote count
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>
        Random Author Generator
      </h1>
      <button
        onClick={getRandomAuthor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
      >
        Inspire Me!
      </button>
      {author && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: "600px",
            margin: "30px auto",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", color: "#333" }}>{author.name}</h2>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            <strong>Description:</strong> {author.description}
          </p>
          <p style={{ fontSize: "1rem", color: "#666", marginTop: "10px" }}>
            <strong>Bio:</strong> {author.bio}
          </p>
          {author.link && (
            <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1rem",
                color: "#007BFF",
                textDecoration: "none",
                marginTop: "10px",
                display: "inline-block",
              }}
            >
              Read More
            </a>
          )}
        </div>
      )}
      <div
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          color: "#555",
        }}
      >
        Quotes Generated: <strong>{quoteCount}</strong>
      </div>
    </div>
  );
}

export default App;
