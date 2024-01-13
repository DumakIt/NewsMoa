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
    name: "대한민국",
  },
  {
    country: "US",
    lat: 39.891275,
    lng: -101.375893,
    name: "미국",
  },
  {
    country: "JP",
    lat: 36.204824,
    lng: 138.252924,
    name: "일본",
  },
  {
    country: "CN",
    lat: 35.86166,
    lng: 104.195397,
    name: "중국",
  },
  {
    country: "GB",
    lat: 55.378051,
    lng: -3.435973,
    name: "영국",
  },
  {
    country: "RU",
    lat: 61.52401,
    lng: 105.318756,
    name: "러시아",
  },
  {
    country: "AU",
    lat: -25.274398,
    lng: 133.775136,
    name: "호주",
  },
  {
    country: "CA",
    lat: 56.130366,
    lng: -106.346771,
    name: "캐나다",
  },
  {
    country: "DE",
    lat: 51.165691,
    lng: 10.451526,
    name: "독일",
  },
];
