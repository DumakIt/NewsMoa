import { hasMoreState, isDataLoadingState } from "./../recoil/atoms";
import { useRecoilState } from "recoil";
import axios from "axios";
import { IUseGetNews } from "../types/hooksTypes";
import { ICountriesDataObj } from "../types/constantsTypes";
import { usePostTranslation } from "./usePostTranslation";

export const useGetNews = (): IUseGetNews => {
  const [, setIsDataLoading] = useRecoilState(isDataLoadingState);
  const [, setHasMore] = useRecoilState(hasMoreState);
  const { postTranslation } = usePostTranslation();

  const getData = async (
    path: string,
    countriesData: ICountriesDataObj[],
    pageSize: number,
    page: number,
    search?: string,
  ) => {
    try {
      setIsDataLoading(true);
      // 매개변수로 받은 countriesData를 활용하여 뉴스 받기
      const fetchPromises = countriesData.map(async (el1) => {
        const params = {
          apikey: process.env.NEXT_PUBLIC_NEWSOMATIC_API_KEY,
          country: el1.country,
          language: el1.language,
          excludeDomains: el1.excludeDomains,
          pageSize,
          page,
          q: search ? search : "",
        };
        const response = await axios.get(
          "https://newsomaticapi.com/apis/news/v1/all",
          { params },
        );

        // 받은 뉴스 데이터중 필요한 것만 return
        const processedData = response.data.articles.map((el2: any) => {
          return {
            title: el2.title,
            description: el2.description,
            image: el2.urlToImage,
            country: el2.country,
            url: el2.url,
            publishedAt: el2.publishedAt,
            countryName: el1.name,
          };
        });
        return processedData;
      });

      // Promise.all을 이용하여 한번에 모든 결과 받기
      const result = await Promise.all(fetchPromises);

      if (result[0].length === 0 && search) {
        setIsDataLoading(false);
        setHasMore(false);
        alert(
          "검색 결과가 없습니다\n검색어를 현재 국가 언어에 맞춰서 해주세요",
        );
        return;
      }

      // 번역 API 요청
      postTranslation(result, path);
    } catch (error) {
      if (error instanceof Error) {
        setIsDataLoading(false);
        setHasMore(false);
        alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");
      }
    }
  };

  return { getData };
};
