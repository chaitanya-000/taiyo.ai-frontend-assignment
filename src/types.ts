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
