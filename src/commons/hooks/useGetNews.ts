import { isDataLoadingState } from "./../recoil/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import axios from "axios";
import { INewsData, IUseGetNews } from "../types/hooksTypes";
import { ICountriesDataObj } from "../types/constantsTypes";

export const useGetNews = (): IUseGetNews => {
  const [newsData, setNewsData] = useState<INewsData>([]);
  const [_, setIsDataLoading] = useRecoilState(isDataLoadingState);

  const getData = async (
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
      // 데이터 저장
      setNewsData(result);
    } catch (error) {
      if (error instanceof Error) {
        setIsDataLoading(false);
        alert(error.message);
      }
    }
  };

  return { newsData, getData };
};
