import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">{t("howItWorks.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((step) => (
          <div key={step}>
            <h3 className="text-base font-semibold">
              {step}. {t(`howItWorks.step${step}.title`)}
            </h3>
            <p className="text-sm text-gray-600">{t(`howItWorks.step${step}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;