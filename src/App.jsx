// src/App.jsx
import React from "react";
import useFlashcard from "../hooks/useFlashcard";
import Card from "../components/Card";
import Dashboard from "../components/Dashboard";
import "./styles/App.css"; // Styling Global

const App = () => {
  const {
    currentCard,
    totalCards,
    masteredCount,
    progressPercentage,
    handleMastery,
    currentIndex,
  } = useFlashcard();

  if (totalCards === 0) {
    return <div className="app-container">Loading data...</div>;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LogikaKata 💡</h1>
        <p>Tingkat SMA: Sejarah & Bahasa</p>
      </header>

      <Dashboard
        total={totalCards}
        mastered={masteredCount}
        percentage={progressPercentage}
      />

      <main className="main-content">
        {currentIndex < totalCards ? (
          <Card
            key={currentCard.id} // Key penting untuk re-render
            question={currentCard.question}
            answer={currentCard.answer}
            category={currentCard.category}
            onMaster={handleMastery}
            onReview={handleMastery}
          />
        ) : (
          <div className="completion-message">
            <h2>🎉 Selesai!</h2>
            <p>
              Anda telah menyelesaikan sesi review ini. Progres Anda: **
              {progressPercentage.toFixed(0)}%**.
            </p>
            <p>Target selanjutnya: fokus pada kartu 'Perlu Review'.</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Kartu **{currentIndex + 1}** dari **{totalCards}**
        </p>
        <p>Proyek UTS POPL - Front-End Development</p>
      </footer>
    </div>
  );
};

export default App;
