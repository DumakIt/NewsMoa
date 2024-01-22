import { useRecoilState } from "recoil";
import { searchState } from "../../../../commons/recoil/atoms";
import { KeyboardEvent, useRef } from "react";
import * as S from "./searchBar01Styles";

export default function SearchBar01(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useRecoilState(searchState);

  const onInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const value = inputRef.current?.value;
    // 입력키가 엔터키가 아니거나 검색어가 이전 검색어와 같을경우 return
    if (event.key !== "Enter" || value?.trim() === search) return;

    if (value !== undefined && (value?.trim() !== "" || value === "")) {
      // isSearch 변경하여 뉴스검색으로 변경
      setSearch(value);
      return;
    }
  };

  return (
    <S.Container>
      <S.InputIcon src="/icons/searchWhite.svg" alt="검색아이콘" />
      <S.Input
        type="text"
        placeholder="검색어를 입력하세요"
        ref={inputRef}
        onKeyDown={onInputKeyPress}
      />
    </S.Container>
  );
}
