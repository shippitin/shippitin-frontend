import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type ShipmentData = {
  location: [number, number];
  path: [number, number][];
  statusTimeline: { status: string; date: string; location: string }[];
};

const TrackPage = () => {
  const [bookingId, setBookingId] = useState('');
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);

  const fetchShipment = async () => {
    if (!bookingId.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://shippitin-backend.onrender.com/api/track/BKG0001');
      if (!res.ok) throw new Error('Shipment not found');
      const data = await res.json();
      setShipment(data);
    } catch (err) {
      setError('Unable to fetch tracking data. Please check Booking ID.');
      setShipment(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [shipment]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-center">Shipment Tracking</h1>

      <div className="flex items-center gap-2 mb-6 justify-center">
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
        <button
          onClick={fetchShipment}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Track
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {shipment && (
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden shadow">
            <MapContainer
              center={shipment.location}
              zoom={13}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Polyline positions={shipment.path} color="blue" />
              <Marker position={shipment.location} />
            </MapContainer>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Status Timeline</h2>
            <div className="space-y-2">
              {shipment.statusTimeline.map((step, index) => {
                const isActive =
                  shipment.location &&
                  shipment.location[0] === shipment.path[index]?.[0] &&
                  shipment.location[1] === shipment.path[index]?.[1];
                return (
                  <div
                    key={index}
                    ref={isActive ? activeRef : null}
                    className={`p-3 border rounded ${
                      isActive ? 'bg-yellow-100 border-yellow-400 font-medium' : ''
                    }`}
                  >
                    <div>{step.location}</div>
                    <div className="text-sm text-gray-500">
                      {step.status} ({step.date})
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackPage;