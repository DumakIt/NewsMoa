import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { isSummaryState } from "../recoil/atoms";

export const usePostOpenAISummary = () => {
  const [, setIsSummary] = useRecoilState(isSummaryState);

  const postOpenAISummary = async (
    content: string,
    setSummary: Dispatch<SetStateAction<string>>,
  ) => {
    setIsSummary(true);
    // open ai API는 클라이언트 측에서 그냥 요청시 api key가 노출되기 때문에 next.js의 API Routes를 사용하여 open ai api를 요청하는 api를 구축 하고 해당 api를 사용
    const response = await axios.post("/api/openAISummary", { content });

    if (!response.data.result)
      return alert("문제가 발생하였습니다\n잠시 후 다시 시도해 주세요.");

    setSummary(response.data.result);
    setIsSummary(false);
  };

  return { postOpenAISummary };
};
