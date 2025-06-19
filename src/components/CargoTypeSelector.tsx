import React from 'react';
import type { CargoType } from '../types/index.ts';

interface CargoTypeSelectorProps {
  selectedType: CargoType;
  onTypeChange: (type: CargoType) => void;
}

const CargoTypeSelector: React.FC<CargoTypeSelectorProps> = ({ 
  selectedType, 
  onTypeChange 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">Choose Cargo Type</label>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="cargo"
            checked={selectedType === 'general'}
            onChange={() => onTypeChange('general')}
            className="mr-2"
          />
          <span className="text-sm">General</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="cargo"
            checked={selectedType === 'rishabaus'}
            onChange={() => onTypeChange('rishabaus')}
            className="mr-2"
          />
          <span className="text-sm">Rishabaus</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="cargo"
            checked={selectedType === 'hazardous'}
            onChange={() => onTypeChange('hazardous')}
            className="mr-2"
          />
          <span className="text-sm flex items-center">
            <span className="text-orange-500 mr-1">⚠</span>
            Haranzdzous
          </span>
        </label>
      </div>
    </div>
  );
};

export default CargoTypeSelector;