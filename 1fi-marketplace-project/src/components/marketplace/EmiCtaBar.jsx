import Button from '../common/Button';

export default function EmiCtaBar({ selectedPlan, onProceed }) {
  return (
    <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
      <Button disabled={!selectedPlan} onClick={() => onProceed(selectedPlan)}>
        {selectedPlan
          ? `Proceed with ${selectedPlan.tenureMonths}M EMI (₹${selectedPlan.monthlyAmount.toLocaleString('en-IN')}/mo)`
          : 'Choose an EMI Plan'}
      </Button>
    </div>
  );
}