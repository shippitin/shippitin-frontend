import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceNavigation from './ServiceNavigation';
import ShipmentTabs from './ShipmentTabs';
import QuoteForm from './QuoteForm';
import type { TabType } from '../types';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState('road');
  const [selectedTab, setSelectedTab] = useState<TabType>('oneTime');

  return (
    <section className="bg-gradient-to-br from-purple-100 via-purple-200 to-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          {t('hero.title')}
        </h1>

        <div className="bg-white shadow-2xl rounded-lg p-4 sm:p-6 mt-6">
          <ServiceNavigation
            activeService={activeService}
            onServiceChange={setActiveService}
          />
          <ShipmentTabs
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
          />
          <QuoteForm
            selectedTab={selectedTab}
            mode={activeService}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;