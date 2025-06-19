import React from 'react';

const offers = [
  {
    title: 'Flat 15% Off on Road Freight',
    subtitle: 'Special discount for first-time shippers via Shippitin.',
    cta: 'Book Now',
  },
  {
    title: 'Global Shipping Offer',
    subtitle: 'Save on LCL & FCL ocean shipments this month.',
    cta: 'Explore Deals',
  },
  {
    title: 'Insurance Combo',
    subtitle: 'Free cargo insurance for select high-value shipments.',
    cta: 'Claim Now',
  },
];

const OffersSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Top Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-medium text-gray-700 mb-1">{offer.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{offer.subtitle}</p>
              <button className="bg-purple-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-purple-700 transition">
                {offer.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;