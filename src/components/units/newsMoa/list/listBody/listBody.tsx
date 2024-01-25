import { SyntheticEvent, useEffect } from "react";
import { useGetNews } from "../../../../../commons/hooks/useGetNews";
import { countriesData } from "../../../../../commons/constants/countriesData";
import { useRecoilState } from "recoil";
import {
  ListDataState,
  hasMoreState,
  isDataLoadingState,
  isHamburgerState,
  searchDataState,
  searchState,
  selectCountryState,
} from "../../../../../commons/recoil/atoms";
import { useRouterMovePage } from "../../../../../commons/hooks/useRouterMovePage";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./listBodyStyles";

export default function ListBody(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const { getData } = useGetNews();
  const [listData] = useRecoilState(ListDataState);
  const [searchData] = useRecoilState(searchDataState);
  const [selectCountry] = useRecoilState(selectCountryState);
  const [isDataLoading] = useRecoilState(isDataLoadingState);
  const [search] = useRecoilState(searchState);
  const [hasMore, setHasMore] = useRecoilState(hasMoreState);
  const [isHamburger, setISHamburger] = useRecoilState(isHamburgerState);

  useEffect(() => {
    setHasMore(true);
    if (listData[selectCountry] === undefined && !search) {
      // 렌더링 및 선택 국가 뉴스 데이터가 없을 경우 요청
      getData("list", [countriesData[selectCountry]], 10, 1);
      return;
    }

    if (searchData[selectCountry + search] === undefined && search) {
      // 햄버거 메뉴가 열려 있을시 닫기
      if (isHamburger === true) setISHamburger(false);
      // 검색시 뉴스 데이터가 없을 경우 요청
      getData("search", [countriesData[selectCountry]], 10, 1, search);
      return;
    }
  }, [selectCountry, search]);

  const loadMore = () => {
    // 무한스크롤 이벤트 페이지는 소수점 올림(해당 뉴스의 길이 / 10) + 1
    if (listData[selectCountry] !== undefined && !isDataLoading && !search) {
      // 검색이 아닌 경우

      getData(
        "list",
        [countriesData[selectCountry]],
        10,
        Math.ceil(listData[selectCountry]?.length / 10) + 1,
      );
      return;
    }

    if (
      searchData[selectCountry + search] !== undefined &&
      !isDataLoading &&
      search
    ) {
      // 검색인 경우
      getData(
        "search",
        [countriesData[selectCountry]],
        10,
        Math.ceil(searchData[selectCountry + search]?.length / 10) + 1,
        search,
      );
      return;
    }
  };

  return (
    <S.Container>
      <S.SelectCountry>{countriesData[selectCountry].name}</S.SelectCountry>
      <InfiniteScroll
        initialLoad={false}
        hasMore={hasMore}
        loadMore={loadMore}
        loader={
          <S.LoadingText key={"InfiniteScroll"}>뉴스 로딩중...</S.LoadingText>
        }
      >
        {(search
          ? searchData[selectCountry + search]
          : listData[selectCountry]
        )?.map((el) => (
          <S.NewsArticle
            key={el.url}
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
        )) ?? <></>}
      </InfiniteScroll>
    </S.Container>
  );
}
