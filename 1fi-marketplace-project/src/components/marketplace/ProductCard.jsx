export default function ProductCard({ product, onSelect }) {
  const minEmi = product.emiPlans?.[0]?.monthlyAmount || null;

  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <img src={product.image} alt={product.name} className="product-thumb" loading="lazy" />
      <div className="product-info">
        <div>
          <span className="product-brand">{product.brand}</span>
          <h3 className="product-name">{product.name}</h3>
        </div>
        <div className="product-pricing">
          <div className="price-val">₹{product.basePrice.toLocaleString('en-IN')}</div>
          {minEmi && (
            <div className="emi-preview-badge">
              From ₹{minEmi.toLocaleString('en-IN')}/mo
            </div>
          )}
        </div>
      </div>
    </div>
  );
}