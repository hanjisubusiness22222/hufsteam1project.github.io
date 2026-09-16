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

let map = null;
let currentInfowindow = null;

// 지도 컨테이너
const mapContainer = document.getElementById('map');

// 1. 카카오맵 안전 초기화 함수
function initKakaoMap() {
  if (typeof kakao === 'undefined' || !kakao.maps) {
    console.warn("카카오맵 SDK가 로드되지 않았습니다. 로컬 file:// 접속이거나 도메인 미등록일 수 있습니다.");
    renderFallbackView("카카오 지도 SDK 로딩 대기 중입니다.<br><small style='color:#64748b;font-weight:normal;'>인터넷 연결 및 카카오 개발자 도메인 등록(https://hanjisubusiness22222.github.io)을 확인해 주세요.</small>");
    return;
  }

  kakao.maps.load(function () {
    try {
      const mapOption = {
        center: new kakao.maps.LatLng(37.597148, 127.057850),
        level: 3
      };

      map = new kakao.maps.Map(mapContainer, mapOption);

      // 줌 컨트롤러 추가
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 기본 마커 등록
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

      console.log("카카오맵이 성공적으로 로드되었습니다.");
    } catch (err) {
      console.error("카카오맵 초기화 실패:", err);
      renderFallbackView("지도를 표시하는 중 오류가 발생했습니다.<br><small>" + err.message + "</small>");
    }
  });
}

// 인포윈도우 표출 함수
function displayInfoWindow(building, marker) {
  if (!map) return;
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

// 지도가 미처 뜨지 않았을 때 보여주는 폴백 뷰
function renderFallbackView(message) {
  mapContainer.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:#f1f5f9;color:#1e293b;padding:24px;text-align:center;">
      <div style="font-size:40px;margin-bottom:12px;">🗺️</div>
      <div style="font-size:1.1rem;font-weight:700;margin-bottom:8px;">${message}</div>
      <p style="color:#64748b;font-size:0.9rem;max-width:460px;margin-bottom:20px;">
        상단 검색창이나 아래 건물 칩을 클릭하시면 건물 상세 정보와 위치를 바로 확인하실 수 있습니다!
      </p>
      <div id="fallbackResultCard" style="display:none;background:white;padding:20px;border-radius:14px;box-shadow:0 8px 20px rgba(0,0,0,0.08);max-width:380px;text-align:left;border:1.5px solid #002c5f;">
      </div>
    </div>
  `;
}

// 2. 건물 검색 함수
function searchBuilding(keyword) {
  const query = (keyword || searchInput.value).trim().toLowerCase();
  if (!query) {
    alert("검색어를 입력해주세요! (예: 미콤, 사관, 도서관, 본관)");
    searchInput.focus();
    return;
  }

  // DB 검색: 건물명 또는 별칭에 검색어가 포함되어 있는지 확인
  const found = hufsBuildings.find(b => 
    b.name.toLowerCase().includes(query) || 
    b.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (found) {
    if (map) {
      const moveLatLon = new kakao.maps.LatLng(found.lat, found.lng);
      map.panTo(moveLatLon);

      const marker = new kakao.maps.Marker({
        position: moveLatLon,
        map: map
      });

      displayInfoWindow(found, marker);
    } else {
      // 맵이 아직 로드되지 않은 경우 카드에 정보 표출
      const fallbackCard = document.getElementById('fallbackResultCard');
      if (fallbackCard) {
        fallbackCard.style.display = 'block';
        fallbackCard.innerHTML = `
          <span style="font-size:0.75rem;background:#fef8ec;color:#002c5f;border:1px solid #c5a059;padding:2px 8px;border-radius:4px;font-weight:700;">HUFS 건물 정보</span>
          <h3 style="margin:8px 0 4px;color:#002c5f;font-size:1.2rem;">${found.name}</h3>
          <p style="font-size:0.8rem;color:#94a3b8;margin-bottom:8px;">별칭: ${found.aliases.join(', ')}</p>
          <p style="font-size:0.9rem;color:#334155;line-height:1.5;margin-bottom:12px;">${found.desc}</p>
          <a href="https://map.kakao.com/link/map/${encodeURIComponent(found.name)},${found.lat},${found.lng}" target="_blank" style="display:inline-block;padding:8px 14px;background:#fee500;color:#191919;border-radius:8px;text-decoration:none;font-weight:700;font-size:0.85rem;">
            카카오맵 웹에서 위치 열기 ↗
          </a>
        `;
      } else {
        alert(`[${found.name}]\n별칭: ${found.aliases.join(', ')}\n\n${found.desc}`);
      }
    }
  } else {
    alert(`'${query}'에 일치하는 외대 건물을 찾을 수 없습니다.\n별칭(예: 미콤, 사관, 본관 등)으로 다시 검색해보세요!`);
  }
}

// 3. UI 이벤트 리스너 등록
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

// 빠른 태그 클릭 이벤트
document.querySelectorAll('.tag-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    if (searchInput) searchInput.value = query;
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

// DOM 로드 완료 후 지도 초기화 실행
window.addEventListener('DOMContentLoaded', initKakaoMap);
