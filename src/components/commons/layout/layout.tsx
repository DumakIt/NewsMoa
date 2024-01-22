import { useRouter } from "next/router";
import LayoutHeader from "./header/layoutHeader";
import { ILayoutProps } from "./layoutTypes";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  return (
    <>
      {router.asPath !== "/" && (
        <>
          <HamburgerMenu />
          <LayoutHeader />
        </>
      )}
      {props.children}
    </>
  );
}
