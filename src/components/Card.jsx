// src/components/Card.jsx
import React, { useState } from "react";
import "styles/Card.css"; // Import styling lokal

const Card = ({ question, answer, category, onMaster, onReview }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAction = (action) => {
    if (action === "master") {
      onMaster(true);
    } else {
      onReview(false);
    }
    setIsFlipped(false); // Reset flip state setelah aksi
  };

  return (
    <div className="card-container">
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card-face card-front">
          <span className="card-category">{category}</span>
          <p className="card-text">{question}</p>
          <small>Klik untuk melihat jawaban...</small>
        </div>
        <div className="card-face card-back">
          <p className="card-text">{answer}</p>
        </div>
      </div>

      {isFlipped && (
        <div className="card-actions">
          <button
            className="btn btn-review"
            onClick={() => handleAction("review")}
          >
            🔄 Perlu Review
          </button>
          <button
            className="btn btn-master"
            onClick={() => handleAction("master")}
          >
            ✅ Kuasai
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
