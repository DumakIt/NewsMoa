import { useRecoilState } from "recoil";
import { selectCountryState } from "../../../../../commons/recoil/atoms";
import { countriesData } from "../../../../../commons/constants/countriesData";
import { MouseEvent } from "react";
import * as S from "./listAsideStyles";

export default function ListAside(): JSX.Element {
  const [selectCountry, setSelectCountry] = useRecoilState(selectCountryState);

  const onClickCountry = (event: MouseEvent<HTMLDivElement>) => {
    setSelectCountry(event.currentTarget.id);
  };

  return (
    <S.Container>
      {Object.values(countriesData).map((el) => (
        <S.CountryWrapper
          key={el.country}
          id={el.country}
          onClick={onClickCountry}
          isSelect={selectCountry === el.country}
        >
          <img src={`/flags/${el.country}.svg`} alt="국기 이미지" />
          <p>{el.name}</p>
        </S.CountryWrapper>
      ))}
    </S.Container>
  );
}
