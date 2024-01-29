import Head from "next/head";
import List from "../../src/components/units/newsMoa/list/list";

export default function ListPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>NewsMoa - List</title>
      </Head>
      <List />
    </>
  );
}
