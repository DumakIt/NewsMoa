import {
  RendingDataState,
  ListDataState,
  isDataLoadingState,
  searchDataState,
  searchState,
} from "./../recoil/atoms";
import { SetterOrUpdater, useRecoilState } from "recoil";
import axios from "axios";
import { INewsData } from "../types/hooksTypes";
import { ITranslateDataState } from "../types/atomsTypes";

export const usePostTranslation = () => {
  const [, setRendingData] = useRecoilState(RendingDataState);
  const [, setListData] = useRecoilState(ListDataState);
  const [, setSearchData] = useRecoilState(searchDataState);
  const [, setIsDataLoading] = useRecoilState(isDataLoadingState);
  const [search] = useRecoilState(searchState);

  const updateData = (
    setData: SetterOrUpdater<ITranslateDataState>,
    result: any[],
    isSearch: boolean,
  ) => {
    setData((prev) => {
      const newData = { ...prev };

      result.forEach((el) => {
        // isSearch가 true이면 국가 코드 + search를 키로 사용하고,
        // false이면 국가 코드(el[0].country)를 키로 사용
        const key = isSearch ? el[0].country + search : el[0].country;

        //해당 키가 이미 newData에 존재하는지 확인 및 있으면 데이터 추가 없으면 만들기
        newData[key] = newData[key] ? [...newData[key], ...el] : el;
      });

      return newData;
    });
  };

  const postTranslation = async (newsData: INewsData, path: string) => {
    try {
      // newsData가 없으면 종료
      if (newsData.length === 0) return;

      // post를 위한 data 및 headers 작성 후 한국어로 번역 요청
      const fetchPromises = newsData.map(async (el: any[]) => {
        // 한국어는 번역할 필요가 없으니 return
        if (el[0].country === "kr") return el;

        const data = {
          from: "auto",
          to: "ko",
          common_protected_paths: [
            "image",
            "country",
            "url",
            "publishedAt",
            "countryName",
          ], // 해당 key는 번역 X
          json: el,
        };

        const headers = {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
          "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
        };

        const response = await axios.post(
          "https://google-translate113.p.rapidapi.com/api/v1/translator/json",
          data,
          { headers },
        );

        return response.data.trans;
      });

      // Promise.all을 이용하여 한번에 모든 결과 받기
      const result = await Promise.all(fetchPromises);

      // path에 따라서 데이터 저장위치 변경
      if (path === "search") {
        updateData(setSearchData, result, true);
      } else {
        const setData = path === "rending" ? setRendingData : setListData;
        updateData(setData, result, false);
      }

      setIsDataLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsDataLoading(false);
        alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");
      }
    }
  };

  return { postTranslation };
};
