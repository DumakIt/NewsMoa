import LayoutHeader from "./header/layoutHeader";
import { ILayoutProps } from "./layoutTypes";

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      {props.children}
    </>
  );
}
