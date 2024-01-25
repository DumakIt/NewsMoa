import axios from "axios";
import { usePostOpenAITrans } from "./usePostOpenAITrans";

export const useGetExtractor = () => {
  const { postOpenAITrans } = usePostOpenAITrans();

  const getExtractor = async (url: string) => {
    try {
      // get을 위한 params 및 headers 작성 후 해낭 url 뉴스 데이터 요청
      const params = { url };
      const headers = {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
        "X-RapidAPI-Host": "article-extractor2.p.rapidapi.com",
      };

      const response = await axios.get(
        "https://article-extractor2.p.rapidapi.com/article/parse",
        { params, headers },
      );

      if (!response.data.data)
        return alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");

      // 필요한 것만 담기
      const extractorData = {
        title: response.data.data.title,
        content: response.data.data.content,
      };

      // open ai API로 번역 요청
      postOpenAITrans(extractorData, url);
    } catch (error) {
      if (error instanceof Error) {
        alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");
      }
    }
  };

  return { getExtractor };
};
