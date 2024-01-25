import { detailDataState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { IExtractorDataObj } from "../types/hooksTypes";
import axios from "axios";

export const usePostOpenAITrans = () => {
  const [, setDetailState] = useRecoilState(detailDataState);

  const postOpenAITrans = async (
    extractorData: IExtractorDataObj,
    url: string,
  ) => {
    try {
      // open ai API는 프론트 측에서 그냥 요청시 api key가 노출되기 때문에 next.js의 API Routes를 사용하여 api구축
      const response = await axios.post("/api/openAITranslate", {
        content: extractorData,
      });

      if (!response.data.result)
        return alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");

      // 데이터 저장
      setDetailState((prev) => ({ ...prev, [url]: response.data.result }));
    } catch (error) {
      if (error instanceof Error) {
        alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");
      }
    }
  };

  return { postOpenAITrans };
};
