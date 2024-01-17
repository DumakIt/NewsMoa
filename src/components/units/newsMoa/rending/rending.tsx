import dynamic from "next/dynamic";
import * as S from "./rendingStyles";
import { useGetNews } from "../../../../commons/hooks/useGetNews";
import { countriesData } from "../../../../commons/constants/countriesData";
import { usePostTranslation } from "../../../../commons/hooks/usePostTranslation";
import { useEffect } from "react";

const Globe = dynamic(
  () => import("./globe/globeEdit").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <S.LoadingText>Loading The World...</S.LoadingText>,
  },
);

export default function Rending(): JSX.Element {
  const { newsData, getData } = useGetNews();
  const translateData = usePostTranslation(newsData);

  useEffect(() => {
    // 렌더링시 뉴스 데이터 요청
    getData(countriesData, 3);
  }, []);

  return (
    <S.Container>
      <Globe />
    </S.Container>
  );
}
