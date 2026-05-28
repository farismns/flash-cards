import { useState } from "react";

export default function FlashCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-scene" onClick={() => setFlipped((f) => !f)}>
      <div className={`card ${flipped ? "card--flipped" : ""}`}>
        <div className="card__face card__face--front">
          <p>{card.question}</p>
        </div>

        <div className="card__face card__face--back">
          <p>{card.answer}</p>
        </div>
      </div>

      <p className="card-hint">
        {flipped ? "Click to see question" : "Click to reveal answer"}
      </p>
    </div>
  );
}
