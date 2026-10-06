export const Button = ({
  children,
  selected,
  onClick,
  disabled,
  variant = "primary",
  type = "button",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass =
    variant === "primary"
      ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
      : variant === "navigation-selected"
        ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
        : variant === "navigation-outline"
          ? "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
          : selected
            ? "bg-indigo-600 text-white shadow-sm"
            : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50";

  const computedClassName = `${base} ${variantClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={computedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
};
