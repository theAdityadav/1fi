import { useState } from 'react';
import VariantSelector from './VariantSelector';
import EmiPlanList from './EmiPlanList';
import EmiCtaBar from './EmiCtaBar';

export default function ProductDetails({ product, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [selectedPlan, setSelectedPlan] = useState(product.emiPlans?.[0] || null);

  const currentPrice = selectedVariant ? selectedVariant.price : product.basePrice;

  const handleProceed = (plan) => {
    alert(
      `Application Initiated!\n\nProduct: ${product.name} (${selectedVariant?.name || 'Standard'})\nTotal Price: ₹${currentPrice.toLocaleString('en-IN')}\nEMI Plan: ${plan.tenureMonths} months @ ₹${plan.monthlyAmount.toLocaleString('en-IN')}/mo`
    );
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

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
      </div>
    </div>
  );
}