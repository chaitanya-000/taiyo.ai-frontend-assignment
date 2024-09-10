import { CovidData } from "./types";

export const fetchCovidData = async (): Promise<CovidData> => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/historical/all?lastdays=all`
  );
  if (!response.ok) {
    throw new Error("There was some trouble gathering the Data.");
  }
  return response.json();
};

export const fetchCountryData = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/countries`);
  if (!response.ok) throw new Error("Failed to fetch country data.");
  const json = await response.json();
  return json;
};

export const fetchWorldCovidStats = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/all`);
  const json = await response.json();
  if (!response.ok) throw new Error("Failed to fetch world data.");
  return json;
};
