import { IExtractorDataObj, INewsDataObj } from "./hooksTypes";

export interface ITranslateDataState {
  [key: string]: INewsDataObj[];
}

export interface IDetailDataState {
  title: string;
  content: string;
}

export interface IExtractorDataState {
  [key: string]: IExtractorDataObj;
}
