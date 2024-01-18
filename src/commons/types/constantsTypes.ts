export interface ICountriesDataObj {
  country: string;
  language: string;
  lat: number;
  lng: number;
  name: string;
  excludeDomains?: string;
}

export interface ICountriesData {
  [key: string]: ICountriesDataObj;
}
