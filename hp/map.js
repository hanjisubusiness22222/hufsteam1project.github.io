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
    name: "사이버관",
    aliases: ["사관", "사이버", "대강당", "C", "c", "C동", "C관"],
    lat: 37.596278,
    lng: 127.059751,
    desc: "외대 정문 우측 위치. 사이버한국외국어대학교 본부, 대강당, 멀티미디어 강의실 (강의실 표기: C-XXX호)"
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

// 구글 지도 및 카드 엘리먼트
const googleMapFrame = document.getElementById('googleMapFrame');
const cardBadge = document.getElementById('cardBadge');
const cardName = document.getElementById('cardName');
const cardAliases = document.getElementById('cardAliases');
const cardDesc = document.getElementById('cardDesc');
const cardRouteBtn = document.getElementById('cardRouteBtn');
const buildingResultCard = document.getElementById('buildingResultCard');

// 검색 함수
function searchBuilding(keyword) {
  const query = (keyword || searchInput.value).trim().toLowerCase();
  if (!query) {
    alert("건물명, 별칭 또는 건물번호를 입력하세요 (예: 본관, 미콤, 0, 1, B, C)");
    searchInput.focus();
    return;
  }

  // DB 검색 (이름, 건물번호 또는 별칭 매칭)
  const found = hufsBuildings.find(b => 
    b.name.toLowerCase().includes(query) || 
    b.buildingNo.toLowerCase() === query ||
    b.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (found) {
    // 1. 구글 지도 iframe 위치 갱신 (18레벨로 상세 확대)
    const embedUrl = `https://maps.google.com/maps?q=${found.lat},${found.lng}&hl=ko&z=18&output=embed`;
    googleMapFrame.src = embedUrl;

    // 2. 결과 카드 업데이트 (건물번호 뱃지 반영)
    if (cardBadge) {
      cardBadge.textContent = `건물번호: [ ${found.buildingNo} ] 번`;
    }
    cardName.textContent = found.name;
    cardAliases.textContent = `별칭 / 코드: ${found.aliases.join(', ')}`;
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

// 4. 내 GPS 위치 찾기 기능
const btnMyLocation = document.getElementById('btnMyLocation');
if (btnMyLocation) {
  btnMyLocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert("현재 사용 중인 브라우저에서 GPS 위치 서비스를 지원하지 않습니다.");
      return;
    }

    const originalText = btnMyLocation.innerHTML;
    btnMyLocation.innerHTML = "⏳ 위치 찾는 중...";
    btnMyLocation.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        btnMyLocation.innerHTML = originalText;
        btnMyLocation.disabled = false;

        const myLat = position.coords.latitude;
        const myLng = position.coords.longitude;
        const accuracy = Math.round(position.coords.accuracy);

        // 구글 지도 iframe 위치를 내 현재 위치로 이동
        const embedUrl = `https://maps.google.com/maps?q=${myLat},${myLng}&hl=ko&z=18&output=embed`;
        googleMapFrame.src = embedUrl;

        // 결과 카드 업데이트
        if (cardBadge) {
          cardBadge.textContent = "📍 실시간 GPS 내 위치";
        }
        cardName.textContent = "현재 내 위치 (GPS)";
        cardAliases.textContent = `위도: ${myLat.toFixed(6)}, 경도: ${myLng.toFixed(6)} (정확도: ±${accuracy}m)`;
        cardDesc.textContent = "스마트폰/PC의 GPS 센서를 기반으로 측정한 현재 위치입니다. 캠퍼스 내 위치를 확인하고 목적지 건물을 검색해 보세요!";
        cardRouteBtn.href = `https://www.google.com/maps/search/?api=1&query=${myLat},${myLng}`;
        cardRouteBtn.textContent = "🧭 구글 지도에서 내 위치 크게 보기 ↗";

        // 카드 애니메이션 리셋
        buildingResultCard.style.animation = 'none';
        buildingResultCard.offsetHeight;
        buildingResultCard.style.animation = 'slideIn 0.3s ease-out';
      },
      (error) => {
        btnMyLocation.innerHTML = originalText;
        btnMyLocation.disabled = false;

        let errorMsg = "위치 정보를 가져오지 못했습니다.";
        if (error.code === error.PERMISSION_DENIED) {
          errorMsg = "브라우저 위치 권한이 차단되어 있습니다.\n브라우저 상단 주소창 옆 자물쇠/권한 설정에서 '위치 접근'을 허용해 주세요!";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMsg = "현재 GPS 신호를 수신할 수 없습니다.";
        } else if (error.code === error.TIMEOUT) {
          errorMsg = "위치 정보를 가져오는 데 시간이 초과되었습니다.";
        }
        alert(errorMsg);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}
