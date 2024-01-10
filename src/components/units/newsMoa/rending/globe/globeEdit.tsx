import { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { countriesHex } from "../../../../commons/utility/countriesHex";
import { countriesData } from "../../../../commons/utility/countriesData";

export default function GlobeEdit(): JSX.Element {
  const globeRef = useRef<GlobeMethods>();

  useEffect(() => {
    if (!globeRef?.current) return;
    // globe 자동회전 및 초기 위치 설정
    globeRef.current.controls().autoRotate = true;
    globeRef.current.pointOfView({
      lat: 35.907757,
      lng: 127.766922,
      altitude: 1.75,
    });
  }, [globeRef.current]);

  const onHoverFlag = (boolean: boolean) => () => {
    if (!globeRef?.current) return;
    globeRef.current.controls().autoRotate = boolean;
  };

  const addFlags = (data: any) => {
    // globe에 국기 이미지 추가 및 마우스 이벤트 추가
    const img = document.createElement("img");
    img.src = `/flags/${data.country}.svg`;
    img.style.width = "50px";
    img.style.pointerEvents = "auto";
    img.style.cursor = "pointer";
    img.onclick = () => console.log(data);
    img.onmouseenter = onHoverFlag(false);
    img.onmouseleave = onHoverFlag(true);
    return img;
  };

  return (
    <Globe
      ref={globeRef}
      hexPolygonsData={countriesHex.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.4}
      hexPolygonColor={() => "#239788"}
      backgroundColor={"#222534"}
      showGlobe={false}
      showAtmosphere={false}
      htmlElementsData={countriesData}
      htmlElement={addFlags}
    />
  );
}
