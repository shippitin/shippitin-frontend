
import { useTranslation } from "react-i18next";

const TopOffersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">{t("offers.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["road", "global", "insurance"].map((key) => (
          <div
            key={key}
            className="border rounded-md p-4 shadow-sm hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold mb-1">{t(`offers.${key}.title`)}</h3>
            <p className="text-sm text-gray-600 mb-2">{t(`offers.${key}.description`)}</p>
            <button className="text-sm text-purple-600 font-medium">
              {t(`offers.${key}.cta`)}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopOffersSection;

