// src/hooks/useFlashcard.js
import { useState, useMemo } from "react";
import { initialFlashcards } from "../data/historyData";

const useFlashcard = () => {
  const [cards, setCards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);

  // LOGIKA REVIEW DAN PROGRESS
  const currentCard = cards[currentIndex];

  const totalCards = cards.length;
  const masteredCount = cards.filter((c) => c.mastered).length;
  const progressPercentage =
    totalCards > 0 ? (masteredCount / totalCards) * 100 : 0;

  // FUNGSI NAVIGASI
  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Semua kartu telah di-review!");
    }
  };

  // FUNGSI TRACKING KEMAJUAN
  const handleMastery = (isMastered) => {
    // Memperbarui state kartu saat ini
    const updatedCards = cards.map((card, index) => {
      if (index === currentIndex) {
        return { ...card, mastered: isMastered };
      }
      return card;
    });
    setCards(updatedCards);

    // Lanjut ke kartu berikutnya
    nextCard();
  };

  return {
    currentCard,
    totalCards,
    masteredCount,
    progressPercentage,
    handleMastery,
    currentIndex,
  };
};

export default useFlashcard;
