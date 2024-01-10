import dynamic from "next/dynamic";
import * as S from "./rendingStyles";

const Globe = dynamic(
  () => import("./globe/globeEdit").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <S.LoadingText>Loading The World...</S.LoadingText>,
  },
);

export default function Rending(): JSX.Element {
  return (
    <S.Container>
      <Globe />
    </S.Container>
  );
}
