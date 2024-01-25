import { IRendingAsideProps } from "./rendingAsideTypes";
import { SyntheticEvent, useMemo } from "react";
import { useRouterMovePage } from "../../../../../commons/hooks/useRouterMovePage";
import * as S from "./rendingAsideStyles";

export default function RendingAside({
  rendingData,
}: IRendingAsideProps): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();

  // 받은 데이터를 최근순으로 변경
  const sortedNews = useMemo(() => {
    return Object.values(rendingData)
      .flat()
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return dateB - dateA;
      });
  }, [rendingData]);

  return (
    <S.Container>
      <S.RecentNews>RECENT NEWS</S.RecentNews>
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
                    // url에 "/", "?"가 있으면 거기까지를 경로로 인식해서 문제가 생기기 때문에 "/", "?"가 아닌 다른 문자로 변경
                    // 해당 페이지에서 다시 "/", "?"로 변경할 예정이기 때문에 다른 url이랑 겹치지 않는 문자로 변경
                    onClickMovePage(
                      `/${el.url
                        .replace(/\//g, "-_no_slash_-")
                        .replace(/\?/g, "-_no_question_-")}`,
                    )
                  }
                >
                  {el.title}
                </S.Title>
              </div>
              <S.TitleImg
                referrerPolicy="no-referrer"
                src={el.image}
                alt="뉴스 이미지"
                onError={(event: SyntheticEvent<HTMLImageElement, Event>) =>
                  (event.currentTarget.src = "/logoWhite.svg")
                }
              />
            </S.TitleWrapper>
          </S.NewsArticle>
        ))
      ) : (
        <S.LoadingText>로딩중...</S.LoadingText>
      )}
    </S.Container>
  );
}
