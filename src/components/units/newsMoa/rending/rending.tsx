import dynamic from "next/dynamic";
import { countries } from "../../../commons/utility/countries";
import * as S from "./rendingStyles";

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
  },
);

export default function Rending(): JSX.Element {
  return (
    <S.Container>
      <Globe
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.4}
        hexPolygonColor={() => "#239788"}
        backgroundColor={"#222534"}
        showGlobe={false}
        showAtmosphere={false}
      />
    </S.Container>
  );
}
