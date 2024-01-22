import dynamic from "next/dynamic";
import { useGetNews } from "../../../../commons/hooks/useGetNews";
import { countriesData } from "../../../../commons/constants/countriesData";
import { useEffect } from "react";
import RendingAside from "./aside/rendingAside";
import { useRecoilState } from "recoil";
import { RendingDataState } from "../../../../commons/recoil/atoms";
import * as S from "./rendingStyles";

const Globe = dynamic(
  () => import("./globe/globeEdit").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <S.LoadingText>Loading The World...</S.LoadingText>,
  },
);

export default function Rending(): JSX.Element {
  const [rendingData] = useRecoilState(RendingDataState);
  const { getData } = useGetNews();

  useEffect(() => {
    if (Object.keys(rendingData).length !== 0) return;

    // 렌더링시 뉴스 데이터 없을시 요청
    getData("rending", Object.values(countriesData), 3, 1);
  }, []);

  return (
    <S.Container>
      <Globe rendingData={rendingData} />
      <S.NavWrapper>
        <S.LogoImg src="/logoWhite.svg" alt="로고 이미지" />
        <S.NewsList href={"/list"}>뉴스 목록</S.NewsList>
      </S.NavWrapper>
      <RendingAside rendingData={rendingData} />
    </S.Container>
  );
}
