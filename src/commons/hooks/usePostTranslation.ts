import axios from "axios";
import { useEffect, useState } from "react";
import { INewsData, ITranslateData } from "../types/hooksTypes";

export const usePostTranslation = (newsData: INewsData) => {
  const [translateData, setTranslateData] = useState<ITranslateData>({});

  useEffect(() => {
    const postTranslation = async () => {
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
            common_protected_paths: ["image", "country", "url", "publishedAt"], // 해당 key는 번역 X
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

        // 국가 키에 데이터가 있으면 추가 없으면 키를 생성해서 저장
        setTranslateData((prev) => {
          // 새로운 데이터를 추가할 새로운 객체 생성
          const newData = { ...prev };

          // result 배열을 순회하면서 데이터를 적절한 국가 키에 추가
          result.forEach((el) => {
            const country = el[0].country;

            // 해당 국가 키가 이미 newData에 존재하는지 확인
            newData[country] = newData[country]
              ? [...newData[country], ...el] // 이미 존재한다면 새로운 데이터를 기존 배열에 추가
              : el; // 존재하지 않는다면 새로운 배열을 만들어 추가
          });

          return newData;
        });
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    };

    postTranslation();
  }, [newsData]);

  return translateData;
};
