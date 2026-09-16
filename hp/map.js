// 한국외대 주요 건물 데이터베이스 (공식 건물 번호 및 정밀 GPS 좌표)
const hufsBuildings = [
  {
    buildingNo: "0",
    name: "본관",
    aliases: ["본관", "대학본부", "main", "총장실", "0", "0번", "0관"],
    lat: 37.597348,
    lng: 127.057670,
    desc: "외대 캠퍼스 중심 상징 건물. 대학본부, 총장실, 교무처 등 주요 행정 부서 위치 (강의실 표기: 0-XXX호)"
  },
  {
    buildingNo: "1",
    name: "인문과학관 (인문관)",
    aliases: ["인문관", "인문과학관", "인문대", "1", "1번", "1관"],
    lat: 37.598130,
    lng: 127.057257,
    desc: "캠퍼스 북서쪽 위치. 철학과, 사학과, 언어인지과학과 등 인문대학 주요 강의실 (강의실 표기: 1-XXX호)"
  },
  {
    buildingNo: "2",
    name: "교수학습개발원 (CTL)",
    aliases: ["교수학습개발원", "교학원", "CTL", "교수학습", "2", "2번", "2관"],
    lat: 37.598404,
    lng: 127.057955,
    desc: "교수학습 역량 지원, 온라인 강의 스튜디오 및 이러닝 콘텐츠 제작 센터 (건물번호: 2번)"
  },
  {
    buildingNo: "3",
    name: "사회과학관",
    aliases: ["사회과학관", "사과관", "사회대", "3", "3번", "3관"],
    lat: 37.596104,
    lng: 127.057765,
    desc: "정경대학 및 미디어커뮤니케이션학부 등 사회과학대학 주요 강의실 (강의실 표기: 3-XXX호)"
  },
  {
    buildingNo: "5",
    name: "법학관",
    aliases: ["법학관", "로스쿨", "법대", "5", "5번", "5관"],
    lat: 37.596708,
    lng: 127.057507,
    desc: "법학전문대학원(로스쿨), 법학도서관, 모의법정 위치 (강의실 표기: 5-XXX호)"
  },
  {
    buildingNo: "8",
    name: "국제관",
    aliases: ["국제관", "국제지역대학원", "8", "8번", "8관"],
    lat: 37.598034,
    lng: 127.059392,
    desc: "국제지역대학원, 통번역대학원 연구실 및 외국어 교육 시설 위치 (강의실 표기: 8-XXX호)"
  },
  {
    buildingNo: "9",
    name: "스마트도서관 (중앙도서관)",
    aliases: ["도서관", "중도", "도관", "스마트도서관", "9", "9번", "9관"],
    lat: 37.595956,
    lng: 127.058765,
    desc: "외대 중앙 스마트도서관. 열람실, 전자정보실, 캐럴, 북카페 위치 (건물번호: 9번)"
  },
  {
    buildingNo: "11",
    name: "교수회관",
    aliases: ["교수회관", "교회", "학식", "학식당", "교직원식당", "11", "11번", "11관"],
    lat: 37.595799,
    lng: 127.059474,
    desc: "교수 연구실, 강연장 및 지하 1층 학생식당 / 2층 교직원식당 위치 (건물번호: 11번)"
  },
  {
    buildingNo: "B",
    name: "미네르바 콤플렉스",
    aliases: ["미콤", "미네르바", "오바마홀", "체육관", "B", "b", "B동", "B관"],
    lat: 37.597200,
    lng: 127.058150,
    desc: "본관 앞 잔디광장 지하 복합시설. 대강당(오바마홀), 국제회의실, 피트니스 및 학생 편의시설 (강의실 표기: B-XXX호)"
  },
  {
    buildingNo: "C",
    name: "사이버관 (사이버대학교)",
    aliases: ["사관", "사이버", "사이버관", "사이버대", "사이버외대", "사이버대학교", "대강당", "C", "c", "C동", "C관"],
    lat: 37.5977,
    lng: 127.0573,
    desc: "사이버한국외국어대학교 본부, 대강당, PC 실습실 및 멀티미디어 강의실 (건물번호: C번)"
  },
  {
    buildingNo: "D",
    name: "국제학사 (신학생회관)",
    aliases: ["국제학사", "기숙사", "글로비돔", "학사", "신학생회관", "D", "d", "D동"],
    lat: 37.596462,
    lng: 127.057335,
    desc: "외대 기숙사 및 동아리방, 유학생 레지던스, 학생 자치 공간 위치 (기숙사/동아리)"
  }
];

// 한국외국어대학교 서울캠퍼스 실제 부지 외곽선 (정밀 실측 Polygon 좌표)
const hufsCampusBoundary = [
  [37.595672, 127.0589345],
  [37.5955657, 127.0592631],
  [37.5954699, 127.0594849],
  [37.5967254, 127.060346],
  [37.5965915, 127.0606799],
  [37.5968601, 127.0608606],
  [37.597001, 127.0605109],
  [37.5974104, 127.0607783],
  [37.5975598, 127.0607482],
  [37.5984657, 127.0587708],
  [37.5985247, 127.0584713],
  [37.5985581, 127.0582309],
  [37.5985749, 127.0578714],
  [37.5985604, 127.0575965],
  [37.5985021, 127.0574115],
  [37.5984537, 127.0572525],
  [37.5983991, 127.0571137],
  [37.5982595, 127.0570034],
  [37.5981185, 127.0569438],
  [37.5976932, 127.0570095],
  [37.5975189, 127.0570095],
  [37.59735, 127.0569874],
  [37.5971619, 127.0569384],
  [37.5967634, 127.0568432],
  [37.596493, 127.056914],
  [37.5959629, 127.0570552],
  [37.595903, 127.0570703],
  [37.5960097, 127.058287],
  [37.59571, 127.0583361],
  [37.595635, 127.0583477],
  [37.5956568, 127.0586257],
  [37.5956733, 127.0588369],
  [37.595672, 127.0589345]
];

// 1. Leaflet 지도 초기화 (한국외대 서울캠퍼스 중심)
const map = L.map('map', {
  center: [37.597148, 127.058150],
  zoom: 17,
  minZoom: 15,
  maxZoom: 19
});

// 고해상도 한글 타일맵 로드 (CartoDB Voyager: 깔끔하고 현대적인 지도)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

// 2. 외대 캠퍼스 정밀 둘레선 (폴리곤) 생성
let campusPolygon = L.polygon(hufsCampusBoundary, {
  color: '#002c5f',       // 외대 시그니처 네이비 테두리
  weight: 3.5,            // 둘레선 두께
  opacity: 0.95,
  fillColor: '#004b93',   // 내부 부지 반투명 채우기
  fillOpacity: 0.12,
  dashArray: '6, 6'       // 세련된 캠퍼스 경계선 점선 효과
}).addTo(map);

campusPolygon.bindTooltip("🏛️ 한국외국어대학교 서울캠퍼스 부지", { sticky: true });
campusPolygon.on('click', () => {
  selectCampusArea();
});

// 3. 건물 마커 핀 등록 (건물번호 뱃지 + 이름)
const buildingMarkers = {};

hufsBuildings.forEach((b) => {
  const customIcon = L.divIcon({
    className: 'custom-building-pin',
    html: `
      <div class="pin-bubble">
        <span class="pin-no-badge">${b.buildingNo}</span>
        <span>${b.name.split(' ')[0]}</span>
      </div>
    `,
    iconSize: [100, 30],
    iconAnchor: [50, 15]
  });

  const marker = L.marker([b.lat, b.lng], { icon: customIcon }).addTo(map);
  buildingMarkers[b.buildingNo] = marker;

  const popupContent = `
    <div style="font-family:'Pretendard',sans-serif;padding:6px;">
      <span style="font-size:0.75rem;background:#fef8ec;color:#002c5f;border:1px solid #c5a059;padding:2px 6px;border-radius:4px;font-weight:700;">건물번호: [ ${b.buildingNo} ] 번</span>
      <h3 style="margin:6px 0 3px;font-size:1.05rem;color:#002c5f;">${b.name}</h3>
      <p style="font-size:0.75rem;color:#64748b;margin-bottom:6px;">별칭: ${b.aliases.join(', ')}</p>
      <p style="font-size:0.85rem;color:#334155;line-height:1.4;">${b.desc}</p>
    </div>
  `;
  marker.bindPopup(popupContent);

  marker.on('click', () => {
    showBuildingDetail(b);
  });
});

// UI 엘리먼트
const cardBadge = document.getElementById('cardBadge');
const cardName = document.getElementById('cardName');
const cardAliases = document.getElementById('cardAliases');
const cardDesc = document.getElementById('cardDesc');
const cardRouteBtn = document.getElementById('cardRouteBtn');
const buildingResultCard = document.getElementById('buildingResultCard');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const btnToggleBoundary = document.getElementById('btnToggleBoundary');
const btnMyLocation = document.getElementById('btnMyLocation');

// 캠퍼스 전체 선택 시 카드 안내
function selectCampusArea() {
  if (cardBadge) cardBadge.textContent = "🏫 한국외대 캠퍼스 부지";
  cardName.textContent = "한국외국어대학교 서울캠퍼스";
  cardAliases.textContent = "총 11개 주요 교육 및 행정 시설";
  cardDesc.textContent = "점선으로 둘러싸인 네이비 라인은 외대 서울캠퍼스의 실제 부지 경계선입니다. 상단 둘레선 버튼으로 켜거나 끌 수 있습니다.";
  cardRouteBtn.href = `https://www.google.com/maps/dir/?api=1&destination=37.597348,127.057670`;
  cardRouteBtn.textContent = "🧭 정문으로 길찾기 ↗";
}

// 건물 상세 카드 갱신
function showBuildingDetail(building) {
  if (cardBadge) {
    cardBadge.textContent = `건물번호: [ ${building.buildingNo} ] 번`;
  }
  cardName.textContent = building.name;
  cardAliases.textContent = `별칭 / 코드: ${building.aliases.join(', ')}`;
  cardDesc.textContent = building.desc;
  cardRouteBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${building.lat},${building.lng}`;
  cardRouteBtn.textContent = `🧭 ${building.name} 길찾기 (구글맵) ↗`;

  // 카드 슬라이드 애니메이션
  buildingResultCard.style.animation = 'none';
  buildingResultCard.offsetHeight; // reflow
  buildingResultCard.style.animation = 'slideIn 0.3s ease-out';
}

// 4. 건물 검색 함수
function searchBuilding(keyword) {
  const query = (keyword || searchInput.value).trim().toLowerCase();
  if (!query) {
    alert("건물명, 번호 또는 별칭을 입력하세요 (예: 1, 0, B, C, 미콤, 사관)");
    searchInput.focus();
    return;
  }

  const found = hufsBuildings.find(b => 
    b.name.toLowerCase().includes(query) || 
    b.buildingNo.toLowerCase() === query ||
    b.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (found) {
    // 1. 해당 건물 좌표로 부드럽게 카메라 이동 (FlyTo)
    map.flyTo([found.lat, found.lng], 18, {
      animate: true,
      duration: 1.0
    });

    // 2. 팝업 오픈
    const marker = buildingMarkers[found.buildingNo];
    if (marker) marker.openPopup();

    // 3. 카드 정보 갱신
    showBuildingDetail(found);
  } else {
    alert(`'${query}'에 일치하는 외대 건물을 찾을 수 없습니다.\n별칭(예: 미콤, 사관, 본관 등)이나 건물번호(0, 1, B 등)로 검색해보세요!`);
  }
}

// 5. 캠퍼스 둘레선 On/Off 토글 버튼
let isBoundaryVisible = true;

if (btnToggleBoundary) {
  btnToggleBoundary.addEventListener('click', () => {
    isBoundaryVisible = !isBoundaryVisible;
    if (isBoundaryVisible) {
      map.addLayer(campusPolygon);
      btnToggleBoundary.classList.add('active');
      btnToggleBoundary.textContent = "🏫 캠퍼스 둘레선 (ON)";
      map.flyTo([37.597148, 127.058150], 17);
      selectCampusArea();
    } else {
      map.removeLayer(campusPolygon);
      btnToggleBoundary.classList.remove('active');
      btnToggleBoundary.textContent = "🏫 캠퍼스 둘레선 (OFF)";
    }
  });
}

// 6. 실시간 내 GPS 위치 찾기
let myLocationMarker = null;
let myLocationCircle = null;

if (btnMyLocation) {
  btnMyLocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert("브라우저에서 GPS 위치 서비스를 지원하지 않습니다.");
      return;
    }

    const originalText = btnMyLocation.innerHTML;
    btnMyLocation.innerHTML = "⏳ 위치 찾는 중...";
    btnMyLocation.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        btnMyLocation.innerHTML = originalText;
        btnMyLocation.disabled = false;

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = Math.round(position.coords.accuracy);

        // 기존 마커 제거
        if (myLocationMarker) map.removeLayer(myLocationMarker);
        if (myLocationCircle) map.removeLayer(myLocationCircle);

        // 내 위치 파란색 펄스 핀 표시
        const myPinIcon = L.divIcon({
          className: 'custom-building-pin',
          html: `<div style="background:#10b981;color:white;padding:5px 10px;border-radius:14px;font-weight:800;font-size:0.8rem;border:2px solid white;box-shadow:0 4px 12px rgba(16,185,129,0.5);">📍 내 위치</div>`,
          iconSize: [80, 30],
          iconAnchor: [40, 15]
        });

        myLocationMarker = L.marker([lat, lng], { icon: myPinIcon }).addTo(map);
        myLocationCircle = L.circle([lat, lng], { radius: accuracy, color: '#10b981', fillOpacity: 0.15 }).addTo(map);

        map.flyTo([lat, lng], 18, { animate: true, duration: 1.0 });

        if (cardBadge) cardBadge.textContent = "📍 실시간 GPS 내 위치";
        cardName.textContent = "현재 내 위치 (GPS)";
        cardAliases.textContent = `위도: ${lat.toFixed(6)}, 경도: ${lng.toFixed(6)} (정확도: ±${accuracy}m)`;
        cardDesc.textContent = "스마트폰/PC의 GPS 센서를 기반으로 측정한 현재 위치입니다. 캠퍼스 내 위치를 확인하고 목적지 건물을 검색해 보세요!";
        cardRouteBtn.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        cardRouteBtn.textContent = "🧭 구글 지도에서 내 위치 열기 ↗";

        buildingResultCard.style.animation = 'none';
        buildingResultCard.offsetHeight;
        buildingResultCard.style.animation = 'slideIn 0.3s ease-out';
      },
      (error) => {
        btnMyLocation.innerHTML = originalText;
        btnMyLocation.disabled = false;
        let msg = "위치 정보를 가져오지 못했습니다.";
        if (error.code === error.PERMISSION_DENIED) {
          msg = "브라우저 위치 권한을 허용해 주셔야 현재 위치를 표시할 수 있습니다.";
        }
        alert(msg);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

// 이벤트 리스너 등록
if (searchBtn) {
  searchBtn.addEventListener('click', () => searchBuilding());
}
if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBuilding();
  });
}

document.querySelectorAll('.tag-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    if (searchInput) searchInput.value = query;
    searchBuilding(query);
  });
});

const btnCloseInfoCard = document.getElementById('btnCloseInfoCard');
if (btnCloseInfoCard) {
  btnCloseInfoCard.addEventListener('click', () => {
    const card = document.getElementById('serviceInfoCard');
    if (card) card.style.display = 'none';
  });
}
