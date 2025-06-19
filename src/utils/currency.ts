// src/utils/currency.ts
import axios from "axios";

const API_URL = "https://api.exchangerate.host/latest";

export async function fetchExchangeRates(base: string = "INR") {
  try {
    const response = await axios.get(`${API_URL}?base=${base}`);
    return response.data?.rates || {};
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return {};
  }
}