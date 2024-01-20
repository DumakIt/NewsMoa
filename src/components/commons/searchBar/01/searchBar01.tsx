import { useRecoilState } from "recoil";
import { searchState } from "../../../../commons/recoil/atoms";
import { KeyboardEvent, useRef } from "react";
import * as S from "./searchBarStyles";

export default function SearchBar01(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [_, setSearch] = useRecoilState(searchState);

  const onInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" || inputRef.current?.value.trim() === "") return;
    if (inputRef.current?.value !== undefined) {
      setSearch(inputRef.current?.value);
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
