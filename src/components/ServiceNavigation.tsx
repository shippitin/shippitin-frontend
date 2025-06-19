// src/components/ServiceNavigation.tsx
import React from 'react';
import { FaTruck, FaTrain, FaPlane, FaShip, FaBoxes, FaGlobe, FaShieldAlt, FaMapMarkerAlt, FaCubes } from 'react-icons/fa';

interface ServiceNavigationProps {
  activeService: string;
  onServiceChange: (service: string) => void;
}

const services = [
  { id: 'road', label: 'Road', icon: <FaTruck /> },
  { id: 'rail', label: 'Rail', icon: <FaTrain /> },
  { id: 'air', label: 'Air', icon: <FaPlane /> },
  { id: 'sea', label: 'Sea', icon: <FaShip /> },
  { id: 'lcl', label: 'LCL', icon: <FaBoxes /> },
  { id: 'parcel', label: 'Parcel', icon: <FaCubes /> },
  { id: 'insurance', label: 'Insurance', icon: <FaShieldAlt /> },
  { id: 'lastmile', label: 'First / Last Mile', icon: <FaMapMarkerAlt /> },
  { id: 'global', label: 'Global', icon: <FaGlobe /> },
];

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ activeService, onServiceChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {services.map((service) => (
        <button
          key={service.id}
          className={`flex flex-col items-center px-3 py-2 rounded-md text-sm ${
            activeService === service.id ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-500'
          } hover:text-purple-700 transition`}
          onClick={() => onServiceChange(service.id)}
        >
          <div className="text-xl mb-1">{service.icon}</div>
          <span>{service.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ServiceNavigation;