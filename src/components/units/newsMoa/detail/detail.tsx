import { useEffect, useState } from "react";
import { useGetExtractor } from "../../../../commons/hooks/useGetExtractor";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  detailDataState,
  isSummaryState,
} from "../../../../commons/recoil/atoms";
import { usePostOpenAISummary } from "../../../../commons/hooks/usePostOpenAISummary";
import DOMPurify from "dompurify";
import Link from "next/link";
import * as S from "./detailStyles";

export default function Detail(): JSX.Element {
  const router = useRouter();
  const { getExtractor } = useGetExtractor();
  const { postOpenAISummary } = usePostOpenAISummary();
  const [detailState] = useRecoilState(detailDataState);
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [isSummary] = useRecoilState(isSummaryState);

  useEffect(() => {
    // url에서 "-_no_slash_-"를 "/"로, "-_no_question_-"를 "?" 변경
    const routerUrl = String(router.query.detail)
      .replace(/-_no_slash_-/g, "/")
      .replace(/-_no_question_-/g, "?");

    if (routerUrl === "undefined") return;

    setUrl(routerUrl);
    // 번역한 데이터가 없을시 번역 데이터 받기
    if (!detailState[routerUrl]) {
      getExtractor(routerUrl);
    }
  }, [router.query.detail]);

  const onClickSummary = () => {
    // 요약이 진행중이면 리턴
    if (isSummary) return alert("진행중입니다\n조금만 기다려주세요");
    postOpenAISummary(detailState[url].content, setSummary);
  };

  return (
    <S.Container>
      <div>
        {detailState[url] ? (
          <>
            <S.Title>{detailState[url].title}</S.Title>
            <hr />
            {summary ? (
              <S.ContentWrapper
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(summary)),
                }}
              />
            ) : (
              <S.ContentWrapper
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(detailState[url].content)),
                }}
              />
            )}
            <S.SourceUrl>
              출처: <Link href={url}>{url}</Link>
            </S.SourceUrl>
            {!summary && (
              <S.SummaryBtnWrapper>
                <button onClick={onClickSummary}>요약하기</button>
              </S.SummaryBtnWrapper>
            )}
          </>
        ) : (
          <S.LoadingText>
            로딩중...
            <br />
            오래 걸릴 수도 있습니다...
          </S.LoadingText>
        )}
      </div>
    </S.Container>
  );
}
