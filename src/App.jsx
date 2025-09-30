// src/App.jsx
import React, { useState } from "react"; // Import useState
import useFlashcard from "./hooks/useFlashcard.js";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage"; // Import komponen LandingPage
import "./styles/App.css";

const App = () => {
  // STATE BARU untuk mengelola tampilan Landing Page
  const [isSessionStarted, setIsSessionStarted] = useState(false);

  const {
    currentCard,
    totalCards,
    masteredCount,
    progressPercentage,
    isSessionComplete,
    isFlipped,
    setIsFlipped,
    handleMaster,
    handleReview,
  } = useFlashcard();

  // FUNGSI UNTUK MEMULAI SESI
  const startSession = () => {
    setIsSessionStarted(true);
  };

  // TAMPILKAN LANDING PAGE JIKA SESI BELUM DIMULAI
  if (!isSessionStarted) {
    return <LandingPage onStart={startSession} />;
  }

  // TAMPILAN UTAMA (STUDY SESSION)
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LogikaKata 💡</h1>
        <p>Aplikasi Review Interaktif SMA: Sejarah, Bahasa, & Konsep Inti.</p>
      </header>

      <div className="main-layout">
        <div className="dashboard-area">
          <Dashboard
            total={totalCards}
            mastered={masteredCount}
            percentage={progressPercentage}
          />
        </div>

        <div className="card-area">
          {isSessionComplete ? (
            <div className="completion-message">
              <h2>🎉 Sesi Review Selesai!</h2>
              <p>
                Anda telah meninjau semua kartu. Progres penguasaan Anda: **
                {progressPercentage.toFixed(0)}%**.
              </p>
              <button
                className="btn-start"
                onClick={() => window.location.reload()}
              >
                Mulai Ulang Sesi
              </button>
            </div>
          ) : (
            currentCard && (
              <>
                {/* 1. Komponen Kartu */}
                <Card
                  key={currentCard.id}
                  data={currentCard}
                  isFlipped={isFlipped}
                  onFlip={() => setIsFlipped((prev) => !prev)}
                />

                {/* 2. Tombol Aksi (Selalu Muncul Jika Flipped) */}
                {isFlipped && (
                  <div className="card-actions">
                    <button className="btn btn-review" onClick={handleReview}>
                      🔄 Perlu Review
                    </button>
                    <button className="btn btn-master" onClick={handleMaster}>
                      ✅ Kuasai
                    </button>
                  </div>
                )}
              </>
            )
          )}
        </div>
      </div>

      <footer className="app-footer">
        <p>
          Proyek UTS POPL - Front-End Development | Dibuat dengan React dan
          Hooks Pattern
        </p>
      </footer>
    </div>
  );
};

export default App;
