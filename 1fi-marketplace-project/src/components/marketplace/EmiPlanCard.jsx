import Badge from '../common/Badge';

export default function EmiPlanCard({ plan, isSelected, onSelect }) {
  return (
    <div className={`emi-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(plan)}>
      <div>
        <div className="emi-tenure">{plan.tenureMonths} Months</div>
        <div className="emi-rate">
          {plan.interestRate === 0 ? 'No Cost EMI' : `${plan.interestRate}% annual interest`}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: '700', fontSize: '15px', color: '#10847e' }}>
          ₹{plan.monthlyAmount.toLocaleString('en-IN')}<span style={{ fontSize: '11px', color: '#64748b' }}>/mo</span>
        </div>
        {plan.tag && <Badge>{plan.tag}</Badge>}
      </div>
    </div>
  );
}