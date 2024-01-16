export default function FinishScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = "🎖️";
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = "🥳";
  }
  if (percentage >= 50 && percentage < 80) {
    emoji = "⭐";
  }
  if (percentage >= 0 && percentage < 50) {
    emoji = "👍";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "resetQuiz" })}
        className="btn btn-ui"
      >
        Reset Quiz
      </button>
    </>
  );
}
