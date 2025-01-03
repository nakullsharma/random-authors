import React, { useState } from "react";
import authors from "./authors.json";

function App() {
  const [author, setAuthor] = useState(null);

  const getRandomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * authors.length);
    setAuthor(authors[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Author Generator</h1>
      <button onClick={getRandomAuthor} style={styles.button}>
       Inspire Me!
       </button>
      {author && (
        <div style={styles.card}>
          <h2 style={styles.authorName}>{author.name}</h2>
          <p style={styles.description}>
            <strong>Description:</strong> {author.description}
          </p>
          <p style={styles.bio}>
            <strong>Bio:</strong> {author.bio}
          </p>
          {author.link && (
            <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Read More
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  card: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "30px auto",
    textAlign: "left",
  },
  authorName: {
    fontSize: "1.8rem",
    color: "#333",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
  },
  bio: {
    fontSize: "1rem",
    color: "#666",
    marginTop: "10px",
  },
  link: {
    fontSize: "1rem",
    color: "#007BFF",
    textDecoration: "none",
    marginTop: "10px",
    display: "inline-block",
  },
};

export default App;
