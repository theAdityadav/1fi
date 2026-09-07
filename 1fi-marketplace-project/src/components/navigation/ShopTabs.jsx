export const TABS = {
  TOP_BRANDS: 'Top Brands',
  NEARBY_STORES: 'Nearby Stores',
  MARKETPLACE: '1Fi Marketplace'
};

export default function ShopTabs({ activeTab, onSelectTab }) {
  return (
    <div className="shop-tabs">
      {Object.values(TABS).map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onSelectTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}