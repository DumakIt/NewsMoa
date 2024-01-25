import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { countriesHex } from "../../../../../commons/constants/countriesHex";
import { countriesData } from "../../../../../commons/constants/countriesData";
import { IGlobeEditProps } from "./globeEditTypes";
import { useRouter } from "next/router";
import { useWindowSize } from "@react-hook/window-size/throttled";
import * as S from "./globeEditStyles";

export default function GlobeEdit({
  rendingData,
}: IGlobeEditProps): JSX.Element {
  const router = useRouter();
  const globeRef = useRef<GlobeMethods>();
  const [popup, setPopup] = useState(false);
  const [width, height] = useWindowSize();

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

  const countriesDataValues = useMemo(() => {
    return Object.values(countriesData);
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
  const addPopup = useCallback(
    (data: any) => {
      setPopup(false);
      const el = document.createElement("div");
      el.insertAdjacentHTML(
        "afterbegin",
        `<div id="${data.country}" class="popupContainer">
        <div class="popupWrapper">
          <div class="popupCountry">
            <p>${data.name}</p>
              <img src="/flags/${data.country}.svg" alt="국기 이미지" />
          </div>
          <p class="popupRecent">최근 뉴스</p>
          ${
            rendingData[data.country]
              ? rendingData[data.country]
                  .slice(0, 3)
                  .map(
                    (el) =>
                      `<p class="popupTitle hasData" id=${el.url} key=${el.url}>${el.title}</p>`,
                  )
                  .join("")
              : `<p class="popupTitle">로딩중...</p>`
          }
        </div>
      </div>`,
      );

      // popupContainer에 마우스 이벤트 할당
      const divElement = el.querySelector("div");
      if (divElement) {
        divElement.onmouseenter = onHoverPopup(false);
        divElement.onmouseleave = onHoverPopup(true);
      }

      // hasData 클래스를 가진 p태그에 클릭 이벤트 할당
      const pElement = el.querySelectorAll(".popupTitle.hasData");
      pElement.forEach((el) => {
        el.addEventListener("click", () => {
          // url에 "/", "?"가 있으면 거기까지를 경로로 인식해서 문제가 생기기 때문에 "/", "?"가 아닌 다른 문자로 변경
          // 해당 페이지에서 다시 "/", "?"로 변경할 예정이기 때문에 다른 url이랑 겹치지 않는 문자로 변경
          router.push(
            `/${el.id
              .replace(/\//g, "-_no_slash_-")
              .replace(/\?/g, "-_no_question_-")}`,
          );
        });
      });

      return el;
    },
    [rendingData],
  );

  return (
    <S.Container>
      <Globe
        ref={globeRef}
        width={width > 480 ? width : 480}
        height={height}
        labelsData={countriesDataValues}
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
        htmlElementsData={countriesDataValues}
        htmlElement={addPopup}
      />
    </S.Container>
  );
}
