import { atom } from "recoil";
import { IExtractorDataState, ITranslateDataState } from "../types/atomsTypes";

// rending 페이지 뉴스 데이터 저장 state
export const RendingDataState = atom<ITranslateDataState>({
  key: "RendingDataState",
  default: {},
});

// list 페이지 뉴스 데이터 저장 state
export const ListDataState = atom<ITranslateDataState>({
  key: "ListDataState",
  default: {},
});

// 뉴스 검색 결과 데이터 저장 state
export const searchDataState = atom<ITranslateDataState>({
  key: "searchDataState",
  default: {},
});

// list 페이지에서 마지막에 어느 국가를 선택했는지 저장 state
export const selectCountryState = atom<string>({
  key: "selectCountryState",
  default: "kr",
});

// list 페이지에서 데이터를 요청중인지 확인하는 state
export const isDataLoadingState = atom({
  key: "isDataLoadingState",
  default: false,
});

// 검색어 저장 state
export const searchState = atom({
  key: "searchState",
  default: "",
});

// 다음 뉴스기사가 있는지에 따라서 무한스크롤 전환 state
export const hasMoreState = atom({
  key: "hasMoreState",
  default: true,
});

// 햄버거 메뉴 전환 state
export const isHamburgerState = atom({
  key: "hamburgerState",
  default: false,
});

// detail 페이지 open ai로 부터 받은 데이터 저장 state
export const detailDataState = atom<IExtractorDataState>({
  key: "detailDataState",
  default: {},
});

// detail 페이지 뉴스 요약 중인지 확인하는 state
export const isSummaryState = atom({
  key: "isSummaryState",
  default: false,
});
