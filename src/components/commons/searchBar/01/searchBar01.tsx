import * as S from "./searchBarStyles";

export default function SearchBar01(): JSX.Element {
  return (
    <S.Container>
      <S.InputIcon src="/icons/searchWhite.svg" alt="검색아이콘" />
      <S.Input type="text" />
    </S.Container>
  );
}
