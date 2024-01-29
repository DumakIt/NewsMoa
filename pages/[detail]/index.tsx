import Head from "next/head";
import Detail from "../../src/components/units/newsMoa/detail/detail";

export default function DetailPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>NewsMoa - detail</title>
      </Head>
      <Detail />
    </>
  );
}
