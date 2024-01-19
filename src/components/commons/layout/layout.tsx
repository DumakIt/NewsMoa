import { useRouter } from "next/router";
import LayoutHeader from "./header/layoutHeader";
import { ILayoutProps } from "./layoutTypes";

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  return (
    <>
      {router.asPath !== "/" && <LayoutHeader />}
      {props.children}
    </>
  );
}
