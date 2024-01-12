import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { countriesHex } from "../../../../commons/utility/countriesHex";
import { countriesData } from "../../../../commons/utility/countriesData";
import * as S from "./globeEditStyles";

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

  const onHoverPopup = (boolean: boolean) => () => {
    if (!globeRef?.current) return;
    globeRef.current.controls().autoRotate = boolean;
  };

  const addPopup = (data: any) => {
    // globe에 팝업 박스 추가
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
          <p class="popupTitle">뉴스 제목이 들어갈 자리</p>
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
  };

  // label 호버시 팝업 박스 display변경을 위한 class 설정
  const toggleLabelClass = (country: string, addLabel: boolean) => {
    const popupElement = document.getElementById(country);
    popupElement?.classList.toggle("hoverLabel", addLabel);
  };

  const onHoverLabel = (enter: any, leave: any) => {
    enter && toggleLabelClass(enter.country, true);
    leave && toggleLabelClass(leave.country, false);
  };

  return (
    <S.Container>
      <Globe
        ref={globeRef}
        labelsData={countriesData}
        labelLat={(e: any) => e.lat}
        labelLng={(e: any) => e.lng}
        labelText={() => ""}
        labelDotRadius={2}
        labelAltitude={0.01}
        labelColor={() => "rgba(255, 165, 0, 0.85)"}
        labelsTransitionDuration={500}
        onLabelHover={onHoverLabel}
        hexPolygonsData={countriesHex.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.4}
        hexPolygonColor={() => "#239788"}
        backgroundColor={"#222534"}
        showGlobe={false}
        showAtmosphere={false}
        htmlElementsData={countriesData}
        htmlElement={addPopup}
      />
    </S.Container>
  );
}
