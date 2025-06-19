import React, { createContext, useEffect, useState, type ReactNode } from "react";
import { fetchExchangeRates } from "../utils/currency";

interface CurrencyContextType {
  selectedCurrency: string;
  exchangeRates: Record<string, number>;
  setSelectedCurrency: (currency: string) => void;
}

export const CurrencyContext = createContext<CurrencyContextType>({
  selectedCurrency: "INR",
  exchangeRates: {},
  setSelectedCurrency: () => {},
});

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});

  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency");
    const initialCurrency = storedCurrency || "INR";
    setSelectedCurrency(initialCurrency);
    fetchExchangeRates(initialCurrency).then((rates) => setExchangeRates(rates));
  }, []);

  useEffect(() => {
    fetchExchangeRates(selectedCurrency).then((rates) => setExchangeRates(rates));
  }, [selectedCurrency]);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, exchangeRates, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};