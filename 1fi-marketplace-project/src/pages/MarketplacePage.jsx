import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/productApi';
import ProductList from '../components/marketplace/ProductList';
import ProductDetails from '../components/marketplace/ProductDetails';
import Loader from '../components/common/Loader';
import ErrorState from '../components/common/ErrorState';

export default function MarketplacePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadMarketplaceData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMarketplaceData();
  }, []);

  if (loading) return <Loader message="Fetching 1Fi Marketplace..." />;
  if (error) return <ErrorState error={error} onRetry={loadMarketplaceData} />;

  return (
    <div>
      <ProductList products={products} onSelectProduct={(product) => setSelectedProduct(product)} />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}