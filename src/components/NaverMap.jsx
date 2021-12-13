/* global kakao */
import React, { useState, useEffect } from "react";
// import Address from "./Address";
import * as S from "./styled";

const { kakao } = window;

function NaverMap() {
  let map;
  function mapmarkerOnClick() {}

  const [Address, setAddress] = useState("");
  const [result, setResult] = useState([]);
  const [MarkerArray, setMarkerArray] = useState([]);

  const onSearchAddress = () => {
    let places = new kakao.maps.services.Places();
    places.setMap(map);

    let callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setResult(result);
      }
    };

    places.keywordSearch(Address, callback);
    mapmarkerOnClick();
    console.log(result);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const createMap = () => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    map = new window.kakao.maps.Map(container, options);
  };

  const mapMarker = () => {
    MarkerArray.forEach((el) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });

    mapmarkerOnClick = () => {
      result.map((m) => {
        let i = {
          title: m.name,
          lat: m.x,
          lng: m.y,
        };
        let copyMarkerArray = [...MarkerArray];
        copyMarkerArray.push(i);
        setMarkerArray(copyMarkerArray);
        console.log(MarkerArray);
      });
    };
  };

  useEffect(() => {
    createMap();
    mapMarker();
  }, []);

  return (
    <S.MapBoxPage>
      <S.mapBox id="map">
        <S.displayFlex>
          <S.SearchBar onChange={onChangeAddress} placeholder="Search" />
          <S.AddressButton onClick={onSearchAddress}>주소 찾기</S.AddressButton>
        </S.displayFlex>
      </S.mapBox>
    </S.MapBoxPage>
  );
}

export default NaverMap;
