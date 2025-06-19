import React from "react";
import { useTranslation } from "react-i18next";

const ComparisonSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6">{t("why.title")}</h2>
      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold">{t("why.panIndia.title")}</h3>
          <p>{t("why.panIndia.desc")}</p>
        </div>
        <div>
          <h3 className="font-semibold">{t("why.multiModal.title")}</h3>
          <p>{t("why.multiModal.desc")}</p>
        </div>
        <div>
          <h3 className="font-semibold">{t("why.instantQuotes.title")}</h3>
          <p>{t("why.instantQuotes.desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;