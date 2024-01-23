import * as S from "./searchBar01Styles";
import { ISearchBar01Props } from "./searchBar01Types";

export default function SearchBar01(props: ISearchBar01Props): JSX.Element {
  return (
    <S.Container>
      <S.InputIcon src="/icons/searchWhite.svg" alt="검색아이콘" />
      <S.Input
        type="text"
        placeholder="검색어를 입력하세요"
        ref={props.inputRef}
        onKeyDown={props.onInputKeyPress}
      />
    </S.Container>
  );
}
