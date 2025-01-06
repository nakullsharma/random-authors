import React, { useState } from "react";
import authors from "./authors.json"; // Importing authors.json
import "./App.css"; // Importing styles

function App() {
  const [author, setAuthor] = useState(null);

  // Function to get a random author
  const getRandomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * authors.length);
    setAuthor(authors[randomIndex]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Random Author Generator</h1>
      <button onClick={getRandomAuthor} className="generate-button">
        Get Inspired!
      </button>
      {author && (
        <div className="quote-card">
          <h2 className="author-name">{author.name}</h2>
          <p className="quote-text">"{author.bio}"</p>
          <p className="author-description">
            <strong>About:</strong> {author.description}
          </p>
          <a
            href={author.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Read More
          </a>
        </div>
      )}
      {!author && (
        <div className="fact-section">
          <p>Click the button to discover an inspiring personality!</p>
        </div>
      )}
    </div>
  );
}

export default App;
