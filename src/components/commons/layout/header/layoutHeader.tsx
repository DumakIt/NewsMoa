import { useRecoilState } from "recoil";
import SearchBar01 from "../../searchBar/01/searchBar01";
import { isHamburgerState } from "../../../../commons/recoil/atoms";
import * as S from "./layoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const [, setISHamburger] = useRecoilState(isHamburgerState);

  const onClickHamburger = () => {
    setISHamburger(true);
  };

  return (
    <S.HeaderContainer>
      <S.FuncWrapper>
        <S.LogoLink href={"/"}>NEWSMOA</S.LogoLink>
        <S.NavBar>
          <S.NavLink href={"/"}>HOME</S.NavLink>
          <S.NavLink href={"/list"}>LIST</S.NavLink>
        </S.NavBar>
      </S.FuncWrapper>
      <S.SearchWrapper>
        <SearchBar01 />
      </S.SearchWrapper>
      <S.HamburgerWrapper>
        <img
          src="/icons/hamburger.svg"
          alt="햄버거 메뉴 버튼"
          onClick={onClickHamburger}
        />
      </S.HamburgerWrapper>
    </S.HeaderContainer>
  );
}
