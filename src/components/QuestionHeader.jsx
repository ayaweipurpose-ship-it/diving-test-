import formatTime from "../utils/formatTime";

const QuestionHeader = ({ currentQuestion, totalQuestions, timeLeft }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid rgba(148, 163, 184, 0.25)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.5rem 0.85rem",
          borderRadius: "9999px",
          background: "#eef2ff",
          color: "#312e81",
          fontSize: "0.9rem",
          fontWeight: 700,
        }}
      >
        ⏱ Time left: {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default QuestionHeader;
