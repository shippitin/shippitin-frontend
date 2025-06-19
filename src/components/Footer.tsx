import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Shippitin</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t("footer.services")}</h4>
          <ul>
            <li>Road Freight</li>
            <li>Rail Logistics</li>
            <li>Air Cargo</li>
            <li>Sea Freight</li>
            <li>Parcel Delivery</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t("footer.support")}</h4>
          <ul>
            <li>Track Shipment</li>
            <li>Help Center</li>
            <li>Report Issue</li>
            <li>Partner with Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t("footer.legal")}</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t("footer.follow")}</h4>
          <div className="flex gap-3 text-xl mt-2">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-6">
        © 2025 Shippitin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;