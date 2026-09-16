// 한국외대 주요 건물 데이터베이스 (별칭 및 위치 정보)
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

// 구글 지도 및 카드 엘리먼트
const googleMapFrame = document.getElementById('googleMapFrame');
const cardName = document.getElementById('cardName');
const cardAliases = document.getElementById('cardAliases');
const cardDesc = document.getElementById('cardDesc');
const cardRouteBtn = document.getElementById('cardRouteBtn');
const buildingResultCard = document.getElementById('buildingResultCard');

// 검색 함수
function searchBuilding(keyword) {
  const query = (keyword || searchInput.value).trim().toLowerCase();
  if (!query) {
    alert("검색어를 입력해주세요! (예: 미콤, 사관, 도서관, 본관)");
    searchInput.focus();
    return;
  }

  // DB 검색 (이름 또는 별칭 매칭)
  const found = hufsBuildings.find(b => 
    b.name.toLowerCase().includes(query) || 
    b.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (found) {
    // 1. 구글 지도 iframe 위치 갱신 (18레벨로 상세 확대)
    const embedUrl = `https://maps.google.com/maps?q=${found.lat},${found.lng}&hl=ko&z=18&output=embed`;
    googleMapFrame.src = embedUrl;

    // 2. 결과 카드 업데이트
    cardName.textContent = found.name;
    cardAliases.textContent = `별칭: ${found.aliases.join(', ')}`;
    cardDesc.textContent = found.desc;
    cardRouteBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${found.lat},${found.lng}`;
    cardRouteBtn.textContent = `🧭 ${found.name} 길찾기 (구글맵) ↗`;

    // 3. 카드 애니메이션 리셋
    buildingResultCard.style.animation = 'none';
    buildingResultCard.offsetHeight; // reflow
    buildingResultCard.style.animation = 'slideIn 0.3s ease-out';
  } else {
    alert(`'${query}'에 일치하는 외대 건물을 찾을 수 없습니다.\n별칭(예: 미콤, 사관, 본관 등)으로 다시 검색해보세요!`);
  }
}

// 이벤트 리스너 등록
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

if (searchBtn) {
  searchBtn.addEventListener('click', () => searchBuilding());
}
if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBuilding();
  });
}

// 빠른 태그 칩 클릭 이벤트
document.querySelectorAll('.tag-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    if (searchInput) searchInput.value = query;
    searchBuilding(query);
  });
});

// 서비스 소개 카드 닫기
const btnCloseInfoCard = document.getElementById('btnCloseInfoCard');
if (btnCloseInfoCard) {
  btnCloseInfoCard.addEventListener('click', () => {
    const card = document.getElementById('serviceInfoCard');
    if (card) card.style.display = 'none';
  });
}
