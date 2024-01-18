import { useRouter } from "next/router";
import { IUseRouterMovePage } from "../types/hooksTypes";

export const useRouterMovePage = (): IUseRouterMovePage => {
  const router = useRouter();

  const onClickMovePage = (path: string) => (): void => {
    void router.push(path);
  };

  const routerMovePage = (path: string): void => {
    void router.push(path);
  };
  return { onClickMovePage, routerMovePage };
};
