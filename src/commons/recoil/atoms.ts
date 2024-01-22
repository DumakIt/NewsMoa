import { atom } from "recoil";
import { ITranslateDataState } from "../types/atomsTypes";

export const RendingDataState = atom<ITranslateDataState>({
  key: "RendingDataState",
  default: {},
});

export const ListDataState = atom<ITranslateDataState>({
  key: "ListDataState",
  default: {},
});

export const searchDataState = atom<ITranslateDataState>({
  key: "searchDataState",
  default: {},
});

export const selectCountryState = atom<string>({
  key: "selectCountryState",
  default: "kr",
});

export const isDataLoadingState = atom({
  key: "isDataLoadingState",
  default: false,
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const hasMoreState = atom({
  key: "hasMoreState",
  default: true,
});

export const isHamburgerState = atom({
  key: "hamburgerState",
  default: false,
});
