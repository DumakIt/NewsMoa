import { useRecoilState } from "recoil";
import { isSearchState, searchState } from "../../../../commons/recoil/atoms";
import { KeyboardEvent, useRef } from "react";
import * as S from "./searchBar01Styles";

export default function SearchBar01(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useRecoilState(searchState);
  const [, setIsSearch] = useRecoilState(isSearchState);

  const onInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const value = inputRef.current?.value;
    // 입력키가 엔터키가 아니거나 검색어가 이전 검색어와 같을경우 return
    if (event.key !== "Enter" || value?.trim() === search) return;

    if (value === "") {
      // 검색어가 있는 상황에서 검색어를 지울경우 isSearch 변경하여 최근뉴스로 변경
      setIsSearch(false);
      setSearch(value);
      return;
    }
    if (value !== undefined && value?.trim() !== "") {
      // isSearch 변경하여 뉴스검색으로 변경
      setIsSearch(true);
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
