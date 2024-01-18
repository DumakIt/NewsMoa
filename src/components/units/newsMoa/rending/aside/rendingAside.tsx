import { IRendingAsideProps } from "./rendingAsideTypes";
import { MouseEvent, useMemo } from "react";
import { useRouterMovePage } from "../../../../../commons/hooks/useRouterMovePage";
import * as S from "./rendingAsideStyles";

export default function RendingAside({
  translateData,
}: IRendingAsideProps): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();

  // 받은 데이터를 최근순으로 변경
  const sortedNews = useMemo(() => {
    return Object.values(translateData)
      .flat()
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return dateB - dateA;
      });
  }, [translateData]);

  return (
    <S.Container>
      <div>
        <S.RecentNews>RECENT NEWS</S.RecentNews>
      </div>
      {sortedNews.length !== 0 ? (
        sortedNews.map((el) => (
          <S.NewsArticle key={el.url}>
            <S.CountryWrapper>
              <S.CountryFlag
                src={`/flags/${el.country}.svg`}
                alt="국기 이미지"
              />
              <S.CountryName>{el.countryName}</S.CountryName>
            </S.CountryWrapper>
            <S.TitleWrapper>
              <div>
                <S.Title
                  onClick={
                    // url에 "/"가 있으면 거기까지를 경로로 인식해서 문제가 생기기 때문에 "/"가 아닌 다른 문자로 변경
                    // 해당 페이지에서 다시 "/"로 변경할 예정이기 때문에 다른 url이랑 겹치지 않는 문자로 변경
                    onClickMovePage(`/${el.url.replace(/\//g, "-_no_slash_-")}`)
                  }
                >
                  {el.title}
                </S.Title>
              </div>
              <S.TitleImg src={el.image} alt="뉴스 이미지" />
            </S.TitleWrapper>
          </S.NewsArticle>
        ))
      ) : (
        <h2>로딩중...</h2>
      )}
    </S.Container>
  );
}
