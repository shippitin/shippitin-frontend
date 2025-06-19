import React from "react";
import { useTranslation } from "react-i18next";

const TrustedPartnersSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8 text-center">
      <h2 className="text-xl font-semibold mb-4">{t("trusted.title")}</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {["Delhivery", "VRL Logistics", "India Post", "FedEx"].map((partner) => (
          <span
            key={partner}
            className="bg-gray-100 text-sm px-4 py-2 rounded shadow-sm"
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartnersSection;