import { Button } from "./UI/Button";

const AnswerOptions = ({ options, selectedIndex, onSelect }) => {
  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      {options.map((option, index) => (
        <div key={index}>
          <Button
            selected={selectedIndex === index}
            onClick={() => onSelect(index)}
            className="w-full justify-start rounded-xl px-4 py-3 text-left text-base font-medium"
            variant={selectedIndex === index ? "primary" : "default"}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "9999px",
                background:
                  selectedIndex === index
                    ? "rgba(255,255,255,0.18)"
                    : "#e2e8f0",
                color: selectedIndex === index ? "#fff" : "#334155",
                fontSize: "0.8rem",
                fontWeight: 700,
                marginRight: "0.75rem",
              }}
            >
              {String.fromCharCode(65 + index)}
            </span>
            <span>{option}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
