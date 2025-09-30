import { useState, useMemo } from "react";
import { initialFlashcards } from "../data/historyData";

const useFlashcard = () => {
  const [cards, setCards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // State flip dipindahkan ke Hook

  // Memfilter kartu yang BELUM selesai di-review
  const cardsToReview = useMemo(() => {
    // Implementasi logika sederhana: prioritas 'need_review', lalu 'unreviewed'
    const unreviewed = cards.filter((c) => c.status !== "mastered");
    return unreviewed.sort((a, b) => {
      if (a.status === "need_review" && b.status !== "need_review") return -1;
      if (a.status !== "need_review" && b.status === "need_review") return 1;
      return 0;
    });
  }, [cards]);

  const currentCard = cardsToReview[currentIndex];

  // LOGIKA REVIEW DAN PROGRESS
  const totalCards = initialFlashcards.length; // Total awal (untuk Dashboard)
  const masteredCount = cards.filter((c) => c.status === "mastered").length;
  const progressPercentage =
    totalCards > 0 ? (masteredCount / totalCards) * 100 : 0;
  const isSessionComplete = currentIndex >= cardsToReview.length;

  // FUNGSI NAVIGASI
  const nextCard = () => {
    setIsFlipped(false); // Reset flip
    setCurrentIndex((prev) => prev + 1);
  };

  // FUNGSI TRACKING KEMAJUAN (Lebih Kompleks)
  const handleAction = (newStatus) => {
    if (!currentCard) return;

    // 1. Update status di array 'cards' utama
    const updatedCards = cards.map((card) => {
      if (card.id === currentCard.id) {
        return {
          ...card,
          status: newStatus,
          lastReviewed: new Date().toISOString(),
        };
      }
      return card;
    });
    setCards(updatedCards);

    // 2. Lanjut ke kartu berikutnya
    nextCard();
  };

  return {
    currentCard,
    totalCards,
    masteredCount,
    progressPercentage,
    isSessionComplete,
    isFlipped,
    setIsFlipped,
    handleMaster: () => handleAction("mastered"),
    handleReview: () => handleAction("need_review"),
  };
};

export default useFlashcard;
