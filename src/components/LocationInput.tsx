import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default LocationInput;
