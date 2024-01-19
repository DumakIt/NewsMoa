import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
