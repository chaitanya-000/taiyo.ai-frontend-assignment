import { QueryObserverResult } from "@tanstack/react-query";

export interface CovidData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}
export interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  active: number;
  deaths: number;
  recovered: number;
}

export interface ErrorProps {
  error: Error | null;
  refetch: () => Promise<QueryObserverResult<CovidData, Error>>;
}

export interface EditContactModalProps {
  closeModal: () => void;
  contact: {
    firstName: string;
    lastName: string;
    status: "active" | "Inactive";
  };
  index: number;
}
