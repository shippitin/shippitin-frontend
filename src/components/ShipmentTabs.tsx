// src/components/ShipmentTabs.tsx
import React from 'react';
import type { TabType } from '../types';

interface ShipmentTabsProps {
  selectedTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

const ShipmentTabs: React.FC<ShipmentTabsProps> = ({ selectedTab, onSelectTab }) => {
  const tabs = [
    { id: 'oneTime', label: 'One-Time Shipment' },
    { id: 'multipleStops', label: 'Multiple Stops' },
    { id: 'recurring', label: 'Regular / Recurring' },
  ] as { id: TabType; label: string }[];

  return (
    <div className="flex space-x-2 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelectTab(tab.id)}
          className={`px-4 py-2 text-sm rounded-full border ${
            selectedTab === tab.id ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ShipmentTabs;