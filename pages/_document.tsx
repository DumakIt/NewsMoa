import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="description"
          content="세계 뉴스를 한곳에 모아 번역 및 요약 이라는 주제로 진행한 개인프로젝트 입니다"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta http-equiv="Author" content="Choi Min Ki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
