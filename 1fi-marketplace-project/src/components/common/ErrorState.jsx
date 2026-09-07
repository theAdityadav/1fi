export default function ErrorState({ error, onRetry }) {
  return (
    <div className="error-container">
      <p style={{ color: '#ef4444', fontSize: '13px', fontWeight: '600' }}>
        {error || 'Something went wrong.'}
      </p>
      {onRetry && (
        <button onClick={onRetry} style={{ background: 'none', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>
          Try Again
        </button>
      )}
    </div>
  );
}