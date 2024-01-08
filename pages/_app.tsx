import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
