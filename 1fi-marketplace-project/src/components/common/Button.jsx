export default function Button({ children, onClick, disabled }) {
  return (
    <button className="btn-primary" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}