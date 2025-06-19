import React from "react";
import { useTranslation } from "react-i18next";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-purple-100 py-10 text-center mt-12">
      <h2 className="text-2xl font-bold mb-2">{t("cta.title")}</h2>
      <p className="mb-4 text-gray-700">{t("cta.subtitle")}</p>
      <button className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition">
        {t("cta.button")}
      </button>
    </section>
  );
};

export default CTASection;