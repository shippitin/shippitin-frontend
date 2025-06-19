import React from 'react';
import { Shield, Eye, HelpCircle } from 'lucide-react';
import type { ServiceOptions } from '../types/index.ts';

interface ValueAddedServicesProps {
  services: ServiceOptions;
  onServicesChange: (services: ServiceOptions) => void;
}

const ValueAddedServices: React.FC<ValueAddedServicesProps> = ({ 
  services, 
  onServicesChange 
}) => {
  const handleServiceChange = (service: keyof ServiceOptions, checked: boolean) => {
    onServicesChange({
      ...services,
      [service]: checked
    });
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">Value-Added Services</label>
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={services.insurance}
            onChange={(e) => handleServiceChange('insurance', e.target.checked)}
            className="mr-2 rounded"
          />
          <Shield className="w-4 h-4 mr-1 text-gray-600" />
          <span className="text-sm">Insurance</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={services.pod}
            onChange={(e) => handleServiceChange('pod', e.target.checked)}
            className="mr-2 rounded"
          />
          <Eye className="w-4 h-4 mr-1 text-gray-600" />
          <span className="text-sm">POD</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={services.firstLastMile}
            onChange={(e) => handleServiceChange('firstLastMile', e.target.checked)}
            className="mr-2 rounded"
          />
          <HelpCircle className="w-4 h-4 mr-1 text-gray-600" />
          <span className="text-sm">First / Last Mile</span>
        </label>
      </div>
    </div>
  );
};

export default ValueAddedServices;
