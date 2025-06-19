export interface Service {
  id: string;
  icon: any;
  label: string;
}

export interface BottomService {
  icon: any;
  title: string;
  subtitle: string;
}

export type CargoType = 'general' | 'rishabaus' | 'hazardous';

export interface ServiceOptions {
  insurance: boolean;
  pod: boolean;
  firstLastMile: boolean;
}

// ✅ Shipment tab selection types
export type TabType = 'oneTime' | 'multipleStops' | 'recurring';

// ✅ Props used in QuoteForm and HeroSection
export interface QuoteFormProps {
  selectedTab: TabType;
  mode: string;
}