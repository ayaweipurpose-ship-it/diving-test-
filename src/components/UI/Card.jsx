export const Card = ({ children }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="card-content">{children}</div>
    </div>
  );
};
