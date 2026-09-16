// 한국외대 주요 건물 DB (추가 및 수정 가능)
const hufsBuildings = [
  {
    name: "본관",
    aliases: ["본관", "대학본부", "main", "총장실"],
    lat: 37.597148,
    lng: 127.058778,
    desc: "외대 정문 앞 상징 건물. 대학본부, 총장실, 교무처 등 행정 부서 위치"
  },
  {
    name: "미네르바 콤플렉스",
    aliases: ["미콤", "미네르바", "오바마홀", "체육관"],
    lat: 37.597395,
    lng: 127.057762,
    desc: "지하 캠퍼스 복합시설. 대강당(오바마홀), 국제회의실, 피트니스 및 학생 편의시설"
  },
  {
    name: "사이버관",
    aliases: ["사관", "사이버", "대강당"],
    lat: 37.597652,
    lng: 127.056976,
    desc: "사이버한국외국어대학교 본부, 대강당, 멀티미디어 강의실 위치"
  },
  {
    name: "스마트도서관 (중앙도서관)",
    aliases: ["도서관", "중도", "도관", "스마트도서관"],
    lat: 37.596850,
    lng: 127.056980,
    desc: "외대 중앙 스마트도서관. 열람실, 전자정보실, 캐럴, 북카페 위치"
  },
  {
    name: "교수회관",
    aliases: ["교수회관", "교회", "학식", "교직원식당"],
    lat: 37.596645,
    lng: 127.057850,
    desc: "교수 연구실, 강연장 및 지하 1층 학생식당 / 2층 교직원식당 위치"
  },
  {
    name: "인문관",
    aliases: ["인문관", "인문대"],
    lat: 37.596085,
    lng: 127.057980,
    desc: "철학과, 사학과, 언어인지과학과 등 인문대학 주요 강의실 위치"
  },
  {
    name: "어문관",
    aliases: ["어문관", "서양어대", "동양어대"],
    lat: 37.595560,
    lng: 127.058510,
    desc: "동양어대학 및 서양어대학 주요 어학 강의실, 과방 위치"
  },
  {
    name: "국제학사 (Globee Dorm)",
    aliases: ["국제학사", "기숙사", "글로비돔", "학사"],
    lat: 37.598200,
    lng: 127.057400,
    desc: "외대 기숙사 및 외국인 유학생 전용 레지던스, 편의점 위치"
  },
  {
    name: "법학관",
    aliases: ["법학관", "로스쿨", "법대"],
    lat: 37.597850,
    lng: 127.058200,
    desc: "법학전문대학원(로스쿨), 법학도서관, 모의법정 위치"
  }
];

// 1. 카카오맵 초기화 (기본 중심: 외대 서울캠 중앙)
const mapContainer = document.getElementById('map'); 
const mapOption = { 
  center: new kakao.maps.LatLng(37.597148, 127.057850), 
  level: 3 
};

let map;
try {
  map = new kakao.maps.Map(mapContainer, mapOption);

  // 줌 컨트롤러 추가
  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  // 기본 마커들 지도에 전부 핀 꽂아두기
  hufsBuildings.forEach((b) => {
    const markerPos = new kakao.maps.LatLng(b.lat, b.lng);
    const marker = new kakao.maps.Marker({
      position: markerPos,
      map: map
    });

    kakao.maps.event.addListener(marker, 'click', () => {
      displayInfoWindow(b, marker);
    });
  });

} catch (e) {
  console.error("카카오맵 초기화 오류: API 키 또는 도메인 설정을 확인해주세요.", e);
}

let currentInfowindow = null;

// 인포윈도우 표출 함수
function displayInfoWindow(building, marker) {
  if (currentInfowindow) currentInfowindow.close();

  const content = `
    <div class="custom-infowindow">
      <span class="iw-badge">HUFS 건물 정보</span>
      <h3 class="iw-title">${building.name}</h3>
      <p class="iw-aliases">별칭: ${building.aliases.join(', ')}</p>
      <p class="iw-desc">${building.desc}</p>
    </div>
  `;

  currentInfowindow = new kakao.maps.InfoWindow({
    content: content,
    removable: true
  });
  currentInfowindow.open(map, marker);
}

// 2. 검색 기능 구현
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => searchBuilding());
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchBuilding();
});

// 빠른 태그 클릭 시 자동 검색
document.querySelectorAll('.tag-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    searchInput.value = query;
    searchBuilding(query);
  });
});

// 안내 카드 닫기 버튼
const btnCloseInfoCard = document.getElementById('btnCloseInfoCard');
if (btnCloseInfoCard) {
  btnCloseInfoCard.addEventListener('click', () => {
    const card = document.getElementById('serviceInfoCard');
    if (card) card.style.display = 'none';
  });
}

function searchBuilding(keyword) {
  if (!map) {
    alert("지도를 로드할 수 없습니다. API 키를 확인해주세요!");
    return;
  }

  const query = (keyword || searchInput.value).trim().toLowerCase();
  if (!query) {
    alert("검색어를 입력해주세요! (예: 미콤, 사관, 도서관)");
    searchInput.focus();
    return;
  }

  // DB 검색: 건물명 또는 별칭에 검색어가 포함되어 있는지 확인
  const found = hufsBuildings.find(b => 
    b.name.toLowerCase().includes(query) || 
    b.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (found) {
    const moveLatLon = new kakao.maps.LatLng(found.lat, found.lng);
    map.panTo(moveLatLon);

    // 해당 위치 임시 마커 및 인포윈도우 오픈
    const marker = new kakao.maps.Marker({
      position: moveLatLon,
      map: map
    });

    displayInfoWindow(found, marker);
  } else {
    alert(`'${query}'에 일치하는 건물을 찾을 수 없습니다.\n별칭(예: 미콤, 사관, 본관 등)으로 다시 검색해보세요!`);
  }
}
