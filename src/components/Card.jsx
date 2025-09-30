// src/components/Card.jsx
import React from "react";
import "./Card.css"; // Import styling lokal

const Card = ({ data, isFlipped, onFlip, onMaster, onReview }) => {
  // Komponen Card hanya menerima state dan fungsi dari Hook (Container)

  return (
    <div className="card-container">
      {/* Flashcard */}
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={onFlip} // Panggil fungsi flip dari Hook
      >
        <div className="card-face card-front">
          <span className="card-category">
            {data.category} - {data.subCategory}
          </span>
          <p className="card-text">{data.question}</p>
          <small>Klik untuk melihat jawaban...</small>
        </div>
        <div className="card-face card-back">
          <p className="card-text">{data.answer}</p>
          <span className={`card-status card-status-${data.status}`}>
            {data.status.replace("_", " ").toUpperCase()}
          </span>
        </div>
      </div>

      {/* Actions (Hanya muncul jika sudah di-flip) */}
      {isFlipped && (
        <div className="card-actions">
          <button className="btn btn-review" onClick={onReview}>
            🔄 Perlu Review
          </button>
          <button className="btn btn-master" onClick={onMaster}>
            ✅ Kuasai
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
