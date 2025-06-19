// src/components/QuoteForm.tsx
import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../context/CurrencyContext";

const QuoteForm: React.FC = () => {
  const { t } = useTranslation();
  const { selectedCurrency, exchangeRates } = useContext(CurrencyContext);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    cargoType: "",
    weight: "",
    date: ""
  });

  const [estimatedBasePrice, setEstimatedBasePrice] = useState<number | null>(null);

  const currencySymbol = {
    INR: "₹",
    USD: "$",
    CNY: "¥",
    JPY: "¥",
    RUB: "₽",
    EUR: "€",
    FR: "€"
  }[selectedCurrency] || selectedCurrency;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetQuote = () => {
    const baseINR = parseFloat(formData.weight) * 10;
    const rate = exchangeRates?.[selectedCurrency] || 1;
    const baseConverted = baseINR * rate;
    setEstimatedBasePrice(baseConverted);
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg w-full max-w-3xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="from" value={formData.from} onChange={handleChange} placeholder={t("form.from")} className="border p-2 rounded" />
        <input name="to" value={formData.to} onChange={handleChange} placeholder={t("form.to")} className="border p-2 rounded" />
        <input name="cargoType" value={formData.cargoType} onChange={handleChange} placeholder={t("form.cargoType")} className="border p-2 rounded" />
        <input name="weight" value={formData.weight} onChange={handleChange} placeholder={t("form.weight")} type="number" className="border p-2 rounded" />
        <input name="date" value={formData.date} onChange={handleChange} placeholder={t("form.date")} type="date" className="border p-2 rounded" />
      </div>

      <button onClick={handleGetQuote} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        {t("form.getQuote")}
      </button>

      {estimatedBasePrice !== null && (
        <div className="mt-6 border-t pt-4 text-sm text-gray-700">
          <h3 className="font-semibold text-base mb-2">{t("form.estimatedPrice")}</h3>
          <ul className="space-y-1">
            <li>
              {t("form.baseRate")}: {currencySymbol} {(estimatedBasePrice * 0.8).toFixed(2)}
            </li>
            <li>
              {t("form.serviceCharge")}: {currencySymbol} {(estimatedBasePrice * 0.1).toFixed(2)}
            </li>
            <li>
              {t("form.insurance")}: {currencySymbol} {(estimatedBasePrice * 0.05).toFixed(2)}
            </li>
            <li>
              {t("form.taxes")}: {currencySymbol} {(estimatedBasePrice * 0.05).toFixed(2)}
            </li>
            <li className="font-bold mt-2 border-t pt-2">
              {t("form.total")}: {currencySymbol} {estimatedBasePrice.toFixed(2)}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;