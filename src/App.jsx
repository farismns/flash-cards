import { useState } from "react";
import flashcards from "./data/flashcards";
import FlashCard from "./components/FlashCard";
import ProgressBar from "./components/ProgressBar";
import Navigation from "./components/Navigation";

export default function App() {
  const [index, setIndex] = useState(0);
  const card = flashcards[index];

  const goNext = () => setIndex((i) => Math.min(i + 1, flashcards.length - 1));
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="app">
      <h1>JS Flashcards</h1>
      <ProgressBar current={index + 1} total={flashcards.length} />
      <FlashCard card={card} />
      <Navigation
        onNext={goNext}
        onPrev={goPrev}
        isFirst={index === 0}
        isLast={index === flashcards.length - 1}
      />
    </div>
  );
}
