// TODO (Person B): 한국외대 주요 건물들의 좌표(lat, lng)와 별칭(aliases)을 추가해 주세요!
const hufsBuildings = [
  {
    name: "본관",
    aliases: ["본관", "대학본부", "main"],
    lat: 37.597148,
    lng: 127.058778,
    desc: "외대 정문을 들어서면 바로 보이는 상징적인 건물"
  },
  {
    name: "미네르바 콤플렉스",
    aliases: ["미콤", "미네르바", "오바마홀", "대강당"],
    lat: 37.597395,
    lng: 127.057762,
    desc: "지하 캠퍼스. 오바마홀과 국제회의장 위치"
  },
  {
    name: "사이버관",
    aliases: ["사관", "사이버", "대강당"],
    lat: 37.597652,
    lng: 127.056976,
    desc: "사이버한국외대 본부 및 대강당"
  }
  // 여기에 더 많은 건물을 추가하세요!
];

// 1. 지도 초기화 (기본 중심: 외대 서울캠 본관)
const mapContainer = document.getElementById('map'); 
const mapOption = { 
  center: new kakao.maps.LatLng(37.597148, 127.058778), 
  level: 3 
};
let map;
try {
  map = new kakao.maps.Map(mapContainer, mapOption);
} catch (e) {
  console.error("API 키가 올바르지 않거나 지도를 로드할 수 없습니다. (Person A 확인 필요)");
}

let currentInfowindow = null;

// 2. 검색 기능 구현
document.getElementById('searchBtn').addEventListener('click', searchBuilding);
document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') searchBuilding();
});

function searchBuilding() {
  if (!map) {
    alert("카카오맵 API 키를 먼저 index.html에 등록해주세요!");
    return;
  }

  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;

  // DB에서 건물 찾기 (이름이나 별칭에 검색어가 포함되어 있는지)
  const found = hufsBuildings.find(b => 
    b.name.toLowerCase().includes(query) || 
    b.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (found) {
    // 지도 중심 이동
    const moveLatLon = new kakao.maps.LatLng(found.lat, found.lng);
    map.panTo(moveLatLon);

    // 마커 띄우기
    const marker = new kakao.maps.Marker({
      position: moveLatLon,
      map: map
    });

    // 기존 정보창 닫기
    if (currentInfowindow) currentInfowindow.close();

    // 새 정보창 열기
    currentInfowindow = new kakao.maps.InfoWindow({
      content: `<div class="info-window"><strong>${found.name}</strong><br>${found.desc}</div>`
    });
    currentInfowindow.open(map, marker);
  } else {
    alert(`'${query}'에 해당하는 건물을 찾을 수 없습니다.\n별칭이 등록되어 있는지 확인해 주세요!`);
  }
}
