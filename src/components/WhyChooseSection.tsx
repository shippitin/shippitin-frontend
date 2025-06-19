import { useTranslation } from "react-i18next";

const WhyChooseSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">{t("why.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["panIndia", "multiModal", "instantQuotes"].map((key) => (
          <div key={key}>
            <h3 className="text-base font-semibold">{t(`why.${key}.title`)}</h3>
            <p className="text-sm text-gray-600">{t(`why.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;