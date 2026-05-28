export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="progress-wrapper">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
      <span className="progress-label">
        {current} / {total}
      </span>
    </div>
  );
}
