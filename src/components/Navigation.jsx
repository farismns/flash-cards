export default function Navigation({ onPrev, onNext, isFirst, isLast }) {
  return (
    <div className="nav">
      <button onClick={onPrev} disabled={isFirst}>
        ← Prev
      </button>
      <button onClick={onNext} disabled={isLast}>
        Next →
      </button>
    </div>
  );
}
