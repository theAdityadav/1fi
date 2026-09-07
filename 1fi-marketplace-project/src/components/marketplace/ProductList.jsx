import ProductCard from './ProductCard';

export default function ProductList({ products, onSelectProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
      ))}
    </div>
  );
}