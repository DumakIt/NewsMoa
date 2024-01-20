import { SyntheticEvent, useEffect } from "react";
import { useGetNews } from "../../../../../commons/hooks/useGetNews";
import { usePostTranslation } from "../../../../../commons/hooks/usePostTranslation";
import { countriesData } from "../../../../../commons/constants/countriesData";
import { useRecoilState } from "recoil";
import {
  isDataLoadingState,
  selectCountryState,
} from "../../../../../commons/recoil/atoms";
import { useRouterMovePage } from "../../../../../commons/hooks/useRouterMovePage";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./listBodyStyles";

export default function ListBody(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const { newsData, getData } = useGetNews();
  const translateData = usePostTranslation(newsData, "list");
  const [selectCountry] = useRecoilState(selectCountryState);
  const [isDataLoading] = useRecoilState(isDataLoadingState);

  useEffect(() => {
    if (translateData[selectCountry] !== undefined) {
      return;
    }
    // 렌더링시 뉴스 데이터가 없을 경우 요청
    getData([countriesData[selectCountry]], 10, 1);
  }, [selectCountry]);

  const loadMore = () => {
    if (translateData[selectCountry] === undefined || isDataLoading) return;
    getData(
      [countriesData[selectCountry]],
      10,
      translateData[selectCountry]?.length / 10 + 1,
    );
  };

  return (
    <S.Container>
      <S.SelectCountry>{countriesData[selectCountry].name}</S.SelectCountry>
      <InfiniteScroll
        hasMore={true}
        loadMore={loadMore}
        loader={<S.LoadingText>뉴스 로딩중...</S.LoadingText>}
      >
        {translateData[selectCountry]?.map((el) => (
          <S.NewsArticle
            key={el.url}
            onClick={
              // url에 "/"가 있으면 거기까지를 경로로 인식해서 문제가 생기기 때문에 "/"가 아닌 다른 문자로 변경
              // 해당 페이지에서 다시 "/"로 변경할 예정이기 때문에 다른 url이랑 겹치지 않는 문자로 변경
              onClickMovePage(`/${el.url.replace(/\//g, "-_no_slash_-")}`)
            }
          >
            <div>
              <S.NewsImg
                referrerPolicy="no-referrer"
                src={el.image}
                alt="뉴스 이미지"
                onError={(event: SyntheticEvent<HTMLImageElement, Event>) =>
                  (event.currentTarget.src = "/logoWhite.svg")
                }
              />
            </div>
            <div>
              <S.NewsTitle>{el.title}</S.NewsTitle>
              <S.NewsDescription>{el.description}</S.NewsDescription>
            </div>
          </S.NewsArticle>
        ))}
      </InfiniteScroll>
    </S.Container>
  );
}
