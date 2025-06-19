import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "zh", label: "Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "ru", label: "Russian" },
  { code: "fr", label: "French" },
];

const currencies = ["INR", "USD", "CNY", "JPY", "RUB", "EUR"];

const Header: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    const storedCurrency = localStorage.getItem("currency");
    if (storedLang) {
      setSelectedLanguage(storedLang);
      i18n.changeLanguage(storedLang);
    }
    if (storedCurrency) {
      setSelectedCurrency(storedCurrency);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    localStorage.setItem("currency", currency);
    window.location.reload(); // or use context to update without reload
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-purple-700">Shippitin</div>
        <div className="flex items-center space-x-4">
          <a href="/track" className="text-sm text-gray-700">{t("header.track")}</a>
          <a href="/my-shipments" className="text-sm text-gray-700">{t("header.myShipments")}</a>
          <a href="/support" className="text-sm text-gray-700">{t("header.support")}</a>
          <a href="/login" className="text-sm font-semibold text-purple-600 border border-purple-600 px-3 py-1 rounded">
            {t("header.loginSignup")}
          </a>
          <select value={selectedLanguage} onChange={handleLanguageChange} className="text-sm border rounded px-2 py-1">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
          <select value={selectedCurrency} onChange={handleCurrencyChange} className="text-sm border rounded px-2 py-1">
            {currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;