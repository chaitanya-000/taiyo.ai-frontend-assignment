import { CovidData } from "./types";

export const fetchCovidData = async (): Promise<CovidData> => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  if (!response.ok) {
    throw new Error("There was some trouble gathering the Data.");
  }
  return response.json();
};
