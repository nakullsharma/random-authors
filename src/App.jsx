import React, { useState } from "react";
import authors from "./authors.json";
import "./App.css"; // Import the CSS file

function App() {
  const [author, setAuthor] = useState(null);
  const [hover, setHover] = useState(false); // State to track hover

  const getRandomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * authors.length);
    setAuthor(authors[randomIndex]);
  };

  return (
    <div className="container">
      <h1 className="title">Random Author Generator</h1>
      <button onClick={getRandomAuthor} className="generate-button">
        Inspire Me!
      </button>
      {author && (
        <div
          className={`card ${hover ? "card-hover" : ""}`} // Apply hover class dynamically
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2 className="author-name">{author.name}</h2>
          <p className="description">
            <strong>Description:</strong> {author.description}
          </p>
          <p className="bio">
            <strong>Bio:</strong> {author.bio}
          </p>
          {author.link && (
            <a href={author.link} target="_blank" rel="noopener noreferrer" className="link">
              Read More
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
