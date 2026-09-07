export default function Loader({ message = "Loading products..." }) {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p style={{ fontSize: '13px', color: '#64748b' }}>{message}</p>
    </div>
  );
}