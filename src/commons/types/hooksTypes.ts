import { ICountriesData } from "./constantsTypes";

export interface INewsDataObj {
  title: string;
  description: string;
  image: string;
  country: string;
  url: string;
  publishedAt: string;
}

export type INewsData = INewsDataObj[][];

export interface IUseGetNews {
  newsData: INewsData;
  getData: (countriesData: ICountriesData, pageSize: number) => Promise<void>;
}

export interface ITranslateData {
  [key: string]: INewsDataObj[];
}
