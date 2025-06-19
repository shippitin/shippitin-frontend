// src/components/ServiceIcons.tsx

import { FaRoad, FaTrain, FaPlane, FaShip, FaBox, FaGlobe, FaShieldAlt, FaRoute, FaTruck } from 'react-icons/fa';

type ServiceIconsProps = {
  activeService: string;
  onServiceChange: (service: string) => void;
};

const services = [
  { id: 'road', label: 'Road', icon: <FaTruck /> },
  { id: 'rail', label: 'Rail', icon: <FaTrain /> },
  { id: 'air', label: 'Air', icon: <FaPlane /> },
  { id: 'sea', label: 'Sea', icon: <FaShip /> },
  { id: 'lcl', label: 'LCL', icon: <FaBox /> },
  { id: 'parcel', label: 'Parcel', icon: <FaRoute /> },
  { id: 'insurance', label: 'Insurance', icon: <FaShieldAlt /> },
  { id: 'lastmile', label: 'First / Last Mile', icon: <FaRoad /> },
  { id: 'global', label: 'Global', icon: <FaGlobe /> },
];

const ServiceIcons: React.FC<ServiceIconsProps> = ({ activeService, onServiceChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceChange(service.id)}
          className={`flex flex-col items-center px-3 py-2 rounded-md text-sm ${
            activeService === service.id
              ? 'text-purple-600 bg-white shadow-md'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          <div className="text-xl mb-1">{service.icon}</div>
          <span>{service.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ServiceIcons;