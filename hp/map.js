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
    lat: 37.5962376,
    lng: 127.0596867,
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

// 외대 정문 기준 좌표 (GPS 미수신 시 기본 출발점)
const HUFS_MAIN_GATE = { lat: 37.595672, lng: 127.058935, name: "외대 정문" };

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

// 1. Leaflet 지도 초기화
const map = L.map('map', {
  center: [37.597148, 127.058150],
  zoom: 17,
  minZoom: 15,
  maxZoom: 19
});

// 고해상도 한글 타일맵 로드 (CartoDB Voyager)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

// 2. 외대 캠퍼스 정밀 둘레선 (폴리곤)
let campusPolygon = L.polygon(hufsCampusBoundary, {
  color: '#002c5f',
  weight: 3.5,
  opacity: 0.95,
  fillColor: '#004b93',
  fillOpacity: 0.12,
  dashArray: '6, 6'
}).addTo(map);

campusPolygon.bindTooltip("🏛️ 한국외국어대학교 서울캠퍼스 부지", { sticky: true });
campusPolygon.on('click', () => {
  selectCampusArea();
});

// 3. 건물 마커 핀 등록
const buildingMarkers = {};
let selectedBuilding = hufsBuildings[0]; // 기본 선택: 본관
let currentUserLocation = null;        // 사용자 GPS 위치
let currentRouteGlow = null;           // 경로 외곽 글로우 라인
let currentRouteLine = null;           // 경로 메인 라인

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
    <div style="font-family:'Pretendard',sans-serif;padding:6px;min-width:180px;">
      <span style="font-size:0.75rem;background:#fef8ec;color:#002c5f;border:1px solid #c5a059;padding:2px 6px;border-radius:4px;font-weight:700;">건물번호: [ ${b.buildingNo} ] 번</span>
      <h3 style="margin:6px 0 3px;font-size:1.05rem;color:#002c5f;">${b.name}</h3>
      <p style="font-size:0.72rem;color:#004b93;margin-bottom:4px;font-weight:600;">📍 GPS: ${b.lat}, ${b.lng}</p>
      <p style="font-size:0.75rem;color:#64748b;margin-bottom:6px;">별칭: ${b.aliases.join(', ')}</p>
      <p style="font-size:0.85rem;color:#334155;line-height:1.4;">${b.desc}</p>
    </div>
  `;
  marker.bindPopup(popupContent);

  marker.on('click', () => {
    selectBuilding(b);
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
const btnDrawRoute = document.getElementById('btnDrawRoute');

// 건물 선택 시 처리
function selectBuilding(b) {
  selectedBuilding = b;
  showBuildingDetail(b);

  // 이미 경로가 켜져 있는 상태라면 새 건물로 경로 즉시 재계산
  if (btnDrawRoute && btnDrawRoute.classList.contains('active-route')) {
    startRoutingToBuilding(b);
  }
}

// 캠퍼스 전체 선택
function selectCampusArea() {
  if (cardBadge) cardBadge.textContent = "🏫 한국외대 캠퍼스 부지";
  cardName.textContent = "한국외국어대학교 서울캠퍼스";
  cardAliases.textContent = "총 11개 주요 교육 및 행정 시설";
  cardDesc.textContent = "점선으로 둘러싸인 네이비 라인은 외대 서울캠퍼스의 실제 부지 경계선입니다. [도보 경로 그리기]를 누르면 정문이나 내 위치에서 건물까지의 길이 그려집니다.";
  cardRouteBtn.href = `https://www.google.com/maps/dir/?api=1&destination=37.597348,127.057670`;
  cardRouteBtn.textContent = "🧭 외대 정문 길찾기 ↗";
}

// 건물 상세 카드 갱신
function showBuildingDetail(building) {
  if (cardBadge) {
    cardBadge.textContent = `건물번호: [ ${building.buildingNo} ] 번`;
  }
  cardName.textContent = building.name;
  cardAliases.innerHTML = `
    <span>별칭 / 코드: ${building.aliases.join(', ')}</span><br>
    <span style="display:inline-block;margin-top:4px;color:#004b93;font-weight:600;font-size:0.8rem;background:#eef6ff;padding:2px 8px;border-radius:4px;border:1px solid #cce3fd;">
      📍 GPS 좌표: ${building.lat}, ${building.lng}
    </span>
  `;
  cardDesc.textContent = building.desc;
  cardRouteBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${building.lat},${building.lng}`;
  cardRouteBtn.textContent = `🧭 구글 길찾기 ↗`;

  if (btnDrawRoute && !btnDrawRoute.classList.contains('active-route')) {
    btnDrawRoute.textContent = `🚶 ${building.name.split(' ')[0]} 도보선 그리기`;
  }

  buildingResultCard.style.animation = 'none';
  buildingResultCard.offsetHeight;
  buildingResultCard.style.animation = 'slideIn 0.3s ease-out';
}

// 4. 도보 경로 안내 (OSRM Foot Routing)
async function startRoutingToBuilding(destBuilding) {
  let startPoint = currentUserLocation;
  let startName = "내 현재 위치";

  // 만약 아직 GPS 위치를 안 찍었으면 외대 정문을 기본 출발점으로 사용
  if (!startPoint) {
    startPoint = HUFS_MAIN_GATE;
    startName = "외대 정문";
  }

  clearRouteLines();

  if (btnDrawRoute) {
    btnDrawRoute.textContent = "⏳ 경로 계산 중...";
  }

  try {
    const url = `https://router.project-osrm.org/route/v1/foot/${startPoint.lng},${startPoint.lat};${destBuilding.lng},${destBuilding.lat}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const coords = route.geometry.coordinates.map(c => [c[1], c[0]]); // [lat, lng]
      const distanceM = Math.round(route.distance);
      const minutes = Math.max(1, Math.ceil(distanceM / 67)); // 4km/h = 약 67m/분

      // 1. 외곽 네이비 글로우 선
      currentRouteGlow = L.polyline(coords, {
        color: '#002c5f',
        weight: 9,
        opacity: 0.35,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(map);

      // 2. 중심 밝은 블루 점선
      currentRouteLine = L.polyline(coords, {
        color: '#0070f3',
        weight: 5,
        opacity: 0.95,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: '8, 4'
      }).addTo(map);

      // 카메라를 경로 전체가 보이도록 줌 맞춤
      map.fitBounds(currentRouteLine.getBounds(), { padding: [60, 60], maxZoom: 18 });

      // 카드 정보 업데이트
      if (cardBadge) cardBadge.textContent = `🚶 도보 약 ${minutes}분 (${distanceM}m)`;
      cardName.textContent = `${startName} ➔ ${destBuilding.name}`;
      cardDesc.innerHTML = `
        <strong>출발:</strong> ${startName} ➔ <strong>도착:</strong> ${destBuilding.name}<br>
        <strong>도보 거리:</strong> ${distanceM} m (약 ${minutes}분 소요)<br>
        <span style="color:#0070f3;font-weight:600;">* 지도 위에 실제 보행로를 따른 파란색 점선 경로가 그려졌습니다.</span>
      `;

      if (btnDrawRoute) {
        btnDrawRoute.textContent = "❌ 경로 지우기";
        btnDrawRoute.classList.add('active-route');
      }
    } else {
      throw new Error("경로 데이터 없음");
    }
  } catch (err) {
    console.warn("보행로 API 응답 지연/실패로 유도 직선으로 대체:", err);
    // 대체용 시그니처 점선
    const coords = [[startPoint.lat, startPoint.lng], [destBuilding.lat, destBuilding.lng]];
    currentRouteLine = L.polyline(coords, {
      color: '#0070f3',
      weight: 5,
      opacity: 0.9,
      dashArray: '10, 10'
    }).addTo(map);
    map.fitBounds(currentRouteLine.getBounds(), { padding: [60, 60] });

    if (cardBadge) cardBadge.textContent = `🧭 직선 유도 경로`;
    cardDesc.innerHTML = `<strong>출발:</strong> ${startName} ➔ <strong>도착:</strong> ${destBuilding.name}<br><small style="color:#64748b;">* 지도 위에 유도선이 표출되었습니다.</small>`;
    if (btnDrawRoute) {
      btnDrawRoute.textContent = "❌ 경로 지우기";
      btnDrawRoute.classList.add('active-route');
    }
  }
}

// 경로선 지우기 함수
function clearRouteLines() {
  if (currentRouteGlow) {
    map.removeLayer(currentRouteGlow);
    currentRouteGlow = null;
  }
  if (currentRouteLine) {
    map.removeLayer(currentRouteLine);
    currentRouteLine = null;
  }
}

// 경로 그리기 버튼 이벤트
if (btnDrawRoute) {
  btnDrawRoute.addEventListener('click', () => {
    if (btnDrawRoute.classList.contains('active-route')) {
      // 경로 지우기
      clearRouteLines();
      btnDrawRoute.classList.remove('active-route');
      showBuildingDetail(selectedBuilding);
    } else {
      // 경로 그리기
      startRoutingToBuilding(selectedBuilding);
    }
  });
}

// 5. 건물 검색 함수
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
    map.flyTo([found.lat, found.lng], 18, { animate: true, duration: 1.0 });

    const marker = buildingMarkers[found.buildingNo];
    if (marker) marker.openPopup();

    selectBuilding(found);
  } else {
    alert(`'${query}'에 일치하는 외대 건물을 찾을 수 없습니다.\n별칭(예: 미콤, 사관, 본관 등)이나 건물번호(0, 1, B 등)로 검색해보세요!`);
  }
}

// 6. 캠퍼스 둘레선 On/Off 토글
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

// 7. 실시간 내 GPS 위치 찾기
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

        currentUserLocation = { lat, lng, name: "내 현재 위치" };

        if (myLocationMarker) map.removeLayer(myLocationMarker);
        if (myLocationCircle) map.removeLayer(myLocationCircle);

        const myPinIcon = L.divIcon({
          className: 'custom-building-pin',
          html: `<div style="background:#10b981;color:white;padding:5px 10px;border-radius:14px;font-weight:800;font-size:0.8rem;border:2px solid white;box-shadow:0 4px 12px rgba(16,185,129,0.5);">📍 내 위치</div>`,
          iconSize: [80, 30],
          iconAnchor: [40, 15]
        });

        myLocationMarker = L.marker([lat, lng], { icon: myPinIcon }).addTo(map);
        myLocationCircle = L.circle([lat, lng], { radius: accuracy, color: '#10b981', fillOpacity: 0.15 }).addTo(map);

        // 내 위치로 지도 이동
        map.flyTo([lat, lng], 18, { animate: true, duration: 1.0 });

        if (cardBadge) cardBadge.textContent = "📍 실시간 GPS 내 위치 수신됨";
        cardName.textContent = "현재 내 위치";
        cardAliases.textContent = `위도: ${lat.toFixed(6)}, 경도: ${lng.toFixed(6)} (정확도: ±${accuracy}m)`;
        cardDesc.innerHTML = `
          내 위치가 성공적으로 수신되었습니다!<br>
          아래 <strong>[${selectedBuilding.name.split(' ')[0]} 도보선 그리기]</strong> 버튼을 누르시면 현재 내 위치에서 해당 건물까지의 실제 이동 경로가 지도에 표시됩니다.
        `;
        cardRouteBtn.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        cardRouteBtn.textContent = "🧭 내 위치 지도 크게보기 ↗";

        if (btnDrawRoute) {
          btnDrawRoute.textContent = `🚶 ${selectedBuilding.name.split(' ')[0]} 도보선 그리기`;
        }

        buildingResultCard.style.animation = 'none';
        buildingResultCard.offsetHeight;
        buildingResultCard.style.animation = 'slideIn 0.3s ease-out';
      },
      (error) => {
        btnMyLocation.innerHTML = originalText;
        btnMyLocation.disabled = false;
        let msg = "위치 정보를 가져오지 못했습니다.";
        if (error.code === error.PERMISSION_DENIED) {
          msg = "브라우저 위치 권한이 차단되어 있습니다.\n외대 정문(기본 출발점) 기준으로 길찾기 선을 그립니다.";
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

// 초기 기본 선택 건물 표출
showBuildingDetail(hufsBuildings[0]);
