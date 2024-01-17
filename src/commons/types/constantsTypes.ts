export interface ICountriesDataObj {
  country: string;
  language: string;
  lat: number;
  lng: number;
  name: string;
  excludeDomains?: string;
}

export type ICountriesData = ICountriesDataObj[];
