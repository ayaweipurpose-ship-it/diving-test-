const AppBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "0.85rem 1rem",
        borderRadius: "1rem",
        background: "linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)",
        border: "1px solid rgba(79, 70, 229, 0.12)",
        boxShadow: "0 10px 30px rgba(79, 70, 229, 0.08)",
        marginBottom: "1.5rem",
      }}
    >
      <span role="img" aria-label="uk flag" style={{ fontSize: "1.5rem" }}>
        🇬🇧
      </span>
      <p
        style={{
          fontSize: "0.9rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#312e81",
        }}
      >
        Driving Theory Test Practice
      </p>
      <span role="img" aria-label="car" style={{ fontSize: "1.5rem" }}>
        🚗
      </span>
    </div>
  );
};

export default AppBanner;
