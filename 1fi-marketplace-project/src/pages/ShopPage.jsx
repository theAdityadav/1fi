import { useState } from 'react';
import ShopTabs, { TABS } from '../components/navigation/ShopTabs';
import TopBrandsPage from './TopBrandsPage';
import NearbyStoresPage from './NearbyStoresPage';
import MarketplacePage from './MarketplacePage';

export default function ShopPage() {
  const [currentTab, setCurrentTab] = useState(TABS.MARKETPLACE);

  const renderActiveTabContent = () => {
    switch (currentTab) {
      case TABS.TOP_BRANDS:
        return <TopBrandsPage />;
      case TABS.NEARBY_STORES:
        return <NearbyStoresPage />;
      case TABS.MARKETPLACE:
      default:
        return <MarketplacePage />;
    }
  };

  return (
    <div className="mobile-app-container">
      <header className="app-header">
        <h1 className="app-title">Shop</h1>
      </header>

      <ShopTabs activeTab={currentTab} onSelectTab={setCurrentTab} />

      <main className="page-content">
        {renderActiveTabContent()}
      </main>
    </div>
  );
}