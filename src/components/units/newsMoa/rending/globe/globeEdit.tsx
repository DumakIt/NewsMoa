import { useCallback, useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { countriesHex } from "../../../../../commons/constants/countriesHex";
import { countriesData } from "../../../../../commons/constants/countriesData";
import * as S from "./globeEditStyles";

export default function GlobeEdit(): JSX.Element {
  const globeRef = useRef<GlobeMethods>();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (!globeRef?.current) return;
    // globe 자동회전 및 초기 위치 설정
    globeRef.current.controls().autoRotate = true;
    globeRef.current.pointOfView({
      lat: 35.907757,
      lng: 127.766922,
      altitude: 1.75,
    });
  }, []);

  const toggleLabelClass = useCallback((country: string, boolean: boolean) => {
    const popupElement = document.getElementById(country);
    popupElement?.classList.toggle("hoverLabel", boolean);
  }, []);

  const onHoverLabel = useCallback(
    (enter: any, leave: any) => {
      // label(노락색 원)에 마우스 enter, leave 및 현재 다른 팝업창의 여부에 따라 display 변경
      if (enter && !popup) toggleLabelClass(enter.country, true);
      if (leave && popup) toggleLabelClass(leave.country, false);
    },
    [popup],
  );

  const onHoverPopup = useCallback(
    (boolean: boolean) => () => {
      // 팝업 박스에 호버시 globe 회전 정지 및 팝업 확인 state 변경
      if (!globeRef?.current) return;
      globeRef.current.controls().autoRotate = boolean;
      setPopup(!boolean);
    },
    [],
  );

  // globe에 팝업 박스 추가
  const addPopup = useCallback((data: any) => {
    const el = document.createElement("div");
    el.insertAdjacentHTML(
      "afterbegin",
      `<div id="${data.country}" class="popupContainer">
        <div class="popupWrapper">
          <div class="popupCountry">
            <p>${data.name}</p>
              <img src="/flags/${data.country}.svg" />
          </div>
          <p class="popupRecent">최근 뉴스</p>
          <p class="popupTitle">뉴스 제목 들어갈 자리</p>
        </div>
      </div>`,
    );

    // popupContainer에 마우스 이벤트 할당
    const divElement = el.querySelector("div");
    if (divElement) {
      divElement.onmouseenter = onHoverPopup(false);
      divElement.onmouseleave = onHoverPopup(true);
    }

    return el;
  }, []);

  return (
    <S.Container>
      <Globe
        ref={globeRef}
        labelsData={countriesData}
        labelText={useCallback(() => "", [])}
        labelDotRadius={useCallback(() => 2, [])}
        labelAltitude={useCallback(() => 0.01, [])}
        labelColor={useCallback(() => "rgba(255, 165, 0, 0.85)", [])}
        labelsTransitionDuration={500}
        onLabelHover={onHoverLabel}
        hexPolygonsData={countriesHex.features}
        hexPolygonResolution={useCallback(() => 3, [])}
        hexPolygonMargin={useCallback(() => 0.4, [])}
        hexPolygonColor={useCallback(() => "#239788", [])}
        backgroundColor={"#222534"}
        showGlobe={false}
        showAtmosphere={false}
        htmlElementsData={countriesData}
        htmlElement={addPopup}
      />
    </S.Container>
  );
}
