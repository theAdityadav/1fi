import { useState } from 'react';
import VariantSelector from './VariantSelector';
import EmiPlanList from './EmiPlanList';
import EmiCtaBar from './EmiCtaBar';

export default function ProductDetails({ product, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [selectedPlan, setSelectedPlan] = useState(product.emiPlans?.[0] || null);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentPrice = selectedVariant ? selectedVariant.price : product.basePrice;

  const handleProceed = () => {
    setIsSuccess(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        {isSuccess ? (
          <div className="success-modal-view">
            <div className="success-icon-wrapper">✓</div>
            <h3 className="success-title">Application Initiated!</h3>
            <p className="success-subtitle">Your EMI loan request has been submitted.</p>

            <div className="success-details-card">
              <div className="success-row">
                <span>Product</span>
                <strong>{product.name} ({selectedVariant?.name || 'Standard'})</strong>
              </div>
              <div className="success-row">
                <span>Total Amount</span>
                <strong>₹{currentPrice.toLocaleString('en-IN')}</strong>
              </div>
              <div className="success-row">
                <span>EMI Tenure</span>
                <strong>{selectedPlan.tenureMonths} Months</strong>
              </div>
              <div className="success-row">
                <span>Monthly Pay</span>
                <strong style={{ color: '#10847e' }}>₹{selectedPlan.monthlyAmount.toLocaleString('en-IN')}/mo</strong>
              </div>
            </div>

            <button className="btn-primary" onClick={onClose} style={{ marginTop: '16px' }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ overflowY: 'auto', paddingRight: '4px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1b2124' }}>{product.name}</h2>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>{product.description}</p>
              <div style={{ fontSize: '20px', fontWeight: '800', color: '#10847e', marginTop: '10px' }}>
                ₹{currentPrice.toLocaleString('en-IN')}
              </div>

              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelectVariant={setSelectedVariant}
              />

              <EmiPlanList
                plans={product.emiPlans}
                selectedPlan={selectedPlan}
                onSelectPlan={setSelectedPlan}
              />
            </div>

            <EmiCtaBar selectedPlan={selectedPlan} onProceed={handleProceed} />
          </>
        )}
      </div>
    </div>
  );
}
