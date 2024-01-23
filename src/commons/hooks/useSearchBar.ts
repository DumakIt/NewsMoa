import { KeyboardEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../recoil/atoms";

export const useSearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useRecoilState(searchState);

  const onInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const value = inputRef.current?.value;
    // 입력키가 엔터키가 아니거나 검색어가 이전 검색어와 같을경우 return
    if (event.key !== "Enter" || value?.trim() === search) return;

    if (value !== undefined && (value?.trim() !== "" || value === "")) {
      // 검색어가 띄어쓰기만 있는지 확인 후 검색어 저장
      setSearch(value);
      return;
    }
  };

  return { inputRef, onInputKeyPress };
};
