import dynamic from "next/dynamic";
import * as S from "./rendingStyles";
import { useGetNews } from "../../../../commons/hooks/useGetNews";
import { countriesData } from "../../../../commons/constants/countriesData";
import { usePostTranslation } from "../../../../commons/hooks/usePostTranslation";
import { useEffect } from "react";
import RendingAside from "./aside/rendingAside";

const Globe = dynamic(
  () => import("./globe/globeEdit").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <S.LoadingText>Loading The World...</S.LoadingText>,
  },
);

export default function Rending(): JSX.Element {
  const { newsData, getData } = useGetNews();
  const translateData = usePostTranslation(newsData, "rending");

  useEffect(() => {
    if (Object.keys(translateData).length !== 0) return;

    // 렌더링시 뉴스 데이터 없을시 요청
    getData(Object.values(countriesData), 3, 1);
  }, []);

  return (
    <S.Container>
      <Globe translateData={translateData} />
      <S.NavWrapper>
        <S.LogoImg src="/logoWhite.svg" alt="로고 이미지" />
        <S.NewsList href={"/list"}>뉴스 목록</S.NewsList>
      </S.NavWrapper>
      <RendingAside translateData={translateData} />
    </S.Container>
  );
}
