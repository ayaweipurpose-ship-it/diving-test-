import { Card } from "./UI/Card";

const ScoreSummary = ({ score, total }) => {
  const isPass = score > 42;

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "0.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: isPass ? "#166534" : "#b91c1c",
            letterSpacing: "-0.04em",
          }}
        >
          {isPass ? "You passed!" : "You failed!"}
        </h2>
        <div
          style={{
            borderRadius: "999px",
            background: isPass ? "#dcfce7" : "#fee2e2",
            color: isPass ? "#166534" : "#991b1b",
            padding: "0.5rem 0.85rem",
            fontWeight: 700,
          }}
        >
          {score}/{total}
        </div>
      </div>
      <p style={{ fontSize: "1.05rem", color: "#475569" }}>
        Your final score is <strong>{score}</strong> out of{" "}
        <strong>{total}</strong>.
      </p>
    </Card>
  );
};

export default ScoreSummary;
