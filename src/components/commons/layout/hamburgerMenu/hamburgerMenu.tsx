import { useRecoilState } from "recoil";
import SearchBar01 from "../../searchBar/01/searchBar01";
import {
  isHamburgerState,
  selectCountryState,
} from "../../../../commons/recoil/atoms";
import { countriesData } from "../../../../commons/constants/countriesData";
import { MouseEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useRouterMovePage } from "../../../../commons/hooks/useRouterMovePage";
import { useSearchBar } from "../../../../commons/hooks/useSearchBar";
import * as S from "./hamburgerMenuStyles";

export default function HamburgerMenu(): JSX.Element {
  const router = useRouter();
  const { routerMovePage } = useRouterMovePage();
  const { inputRef, onInputKeyPress } = useSearchBar();
  const [, setSelectCountry] = useRecoilState(selectCountryState);
  const [isHamburger, setISHamburger] = useRecoilState(isHamburgerState);

  const onClickClose = () => {
    setISHamburger(false);
  };

  const onClickCountry = (event: MouseEvent<HTMLDivElement>) => {
    setSelectCountry(event.currentTarget.id);
    setISHamburger(false);

    // 리스트 페이지가 아닐경우 리스트 페이지로 이동
    if (router.asPath !== "/list") routerMovePage("/list");
  };

  useEffect(() => {
    // 배경이 스크롤 방지
    if (isHamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHamburger]);

  return (
    <S.Container isHamburger={isHamburger}>
      <S.CloseIcon
        src="/icons/close.svg"
        alt="닫기 버튼"
        onClick={onClickClose}
      />
      <S.NavWrapper>
        {router.asPath === "/list" && (
          <SearchBar01 inputRef={inputRef} onInputKeyPress={onInputKeyPress} />
        )}
        <S.NavLink href={"/"}>HOME</S.NavLink>
        <S.ListText>LIST</S.ListText>
        {Object.values(countriesData).map((el) => (
          <S.CountryWrapper
            key={el.country}
            id={el.country}
            onClick={onClickCountry}
          >
            <img src={`/flags/${el.country}.svg`} alt="국기 이미지" />
            <p>{el.name}</p>
          </S.CountryWrapper>
        ))}
      </S.NavWrapper>
    </S.Container>
  );
}
