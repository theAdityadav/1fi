import EmiPlanCard from './EmiPlanCard';

export default function EmiPlanList({ plans, selectedPlan, onSelectPlan }) {
  return (
    <div style={{ marginTop: '12px' }}>
      <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b' }}>SELECT EMI PLAN</label>
      <div className="emi-list">
        {plans.map((plan) => (
          <EmiPlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan?.id === plan.id}
            onSelect={onSelectPlan}
          />
        ))}
      </div>
    </div>
  );
}