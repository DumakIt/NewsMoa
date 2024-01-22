import { ICountriesDataObj } from "./constantsTypes";

export interface INewsDataObj {
  title: string;
  description: string;
  image: string;
  country: string;
  url: string;
  publishedAt: string;
  countryName: string;
}

export type INewsData = INewsDataObj[][];

export interface IUseGetNews {
  getData: (
    path: "rending" | "list" | "search",
    countriesData: ICountriesDataObj[],
    pageSize: number,
    page: number,
    search?: string,
  ) => Promise<void>;
}

export interface IUseRouterMovePage {
  onClickMovePage: (path: string) => () => void;
  routerMovePage: (path: string) => void;
}
