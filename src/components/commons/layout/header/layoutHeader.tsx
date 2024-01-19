import SearchBar01 from "../../searchBar/01/searchBar01";
import * as S from "./layoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.HeaderContainer>
      <S.FuncWrapper>
        <S.LogoLink href={"/"}>NEWSMOA</S.LogoLink>
        <S.NavBar>
          <S.NavLink href={"/"}>HOME</S.NavLink>
          <S.NavLink href={"/list"}>LIST</S.NavLink>
        </S.NavBar>
      </S.FuncWrapper>
      <div>
        <SearchBar01 />
      </div>
    </S.HeaderContainer>
  );
}
