export interface ICountriesData {
  country: string;
  lat: number;
  lng: number;
  name: string;
}

export const countriesData: ICountriesData[] = [
  {
    country: "KR",
    lat: 35.907757,
    lng: 127.766922,
    name: "South Korea",
  },
  {
    country: "US",
    lat: 39.891275,
    lng: -101.375893,
    name: "United States Of America",
  },
  {
    country: "JP",
    lat: 36.204824,
    lng: 138.252924,
    name: "Japan",
  },
  {
    country: "CN",
    lat: 35.86166,
    lng: 104.195397,
    name: "China",
  },
  {
    country: "GB",
    lat: 55.378051,
    lng: -3.435973,
    name: "United Kingdom",
  },
  {
    country: "RU",
    lat: 61.52401,
    lng: 105.318756,
    name: "Russia",
  },
  {
    country: "AU",
    lat: -25.274398,
    lng: 133.775136,
    name: "Australia",
  },
  {
    country: "CA",
    lat: 56.130366,
    lng: -106.346771,
    name: "Canada",
  },
  {
    country: "DE",
    lat: 51.165691,
    lng: 10.451526,
    name: "Germany",
  },
];
