export default function VariantSelector({ variants, selectedVariant, onSelectVariant }) {
  if (!variants || variants.length === 0) return null;

  return (
    <div style={{ marginTop: '14px' }}>
      <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b' }}>SELECT VARIANT</label>
      <div className="variant-group">
        {variants.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`variant-chip ${selectedVariant?.id === v.id ? 'active' : ''}`}
            onClick={() => onSelectVariant(v)}
          >
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
}