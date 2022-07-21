const places = [
  [
    ["고래감자탕", "http://naver.me/57w88fX1", "감자탕", "B동 B3층"],
    ["교대이층집", "http://naver.me/xB4cRITH", "고기", "C동 2층"],
    ["그믐족발", "http://naver.me/Fwnm2MHl", "족발", "B동 1층"],
    ["깐부치킨", "http://naver.me/G4rx6AHC", "치킨", "C동 2층"],
    ["깨비옥", "http://naver.me/xRQ0n1HZ", "곰탕", "C동 1층"],
    ["담솥", "http://naver.me/56YX6xin", "솥밥", "B동 B3층"],
    ["돈블랑", "http://naver.me/FpXMQpu9", "고기", "C동 1층"],
    ["동춘돌곱창", "http://naver.me/F6m35th1", "곱창", "B동 1층"],
    ["등짝스매싱", "http://naver.me/FQaIg35C", "등갈비", "C동 2층"],
    ["로다닭", "http://naver.me/xSc3jp6v", "치킨", "B동 1층"],
    ["만석장", "http://naver.me/GNyvjOfB", "두부", "C동 B1/B2층"],
    ["명동칼국수", "http://naver.me/5B1iWEro", "칼국수", "C동 B2층"],
    ["배부장찌개", "http://naver.me/FslKdVhs", "찌개", "C동 1층"],
    ["별계숯불닭갈비", "http://naver.me/FGoJk1uf", "닭갈비", "C동 1층"],
    ["북촌손만두", "http://naver.me/Gz5gnIm5", "만두", "B동 B3층"],
    ["삼청동샤브", "http://naver.me/xVl3Rau9", "샤브샤브", "A동 별관"],
    ["소공동뚝배기집", "http://naver.me/GDcrYblV", "순두부", "B동 B3층"],
    ["솥고집", "http://naver.me/GfPj5uqM", "고기", "D동 1층"],
    ["예향정", "http://naver.me/FRDWDO3Y", "찌개", "B동 B3층"],
    ["용호동낙지", "http://naver.me/FLBKfO39", "낙곱새", "C동 B2층"],
    ["유가네닭갈비", "http://naver.me/xzcHI6qx", "닭갈비", "B동 B3층"],
    ["육회본가", "http://naver.me/GWFcIjpx", "육회", "B동 1층"],
    ["장혁민의부대찌개", "http://naver.me/GWFrxMNn", "부대찌개", "B동 B3층"],
    ["족발야시장", "http://naver.me/GgeuJlQm", "족발", "C동 1층"],
    ["차돌풍", "http://naver.me/5HSpqtA7", "고기", "C동 1층"],
    ["크앙분식", "http://naver.me/5AmcVum7", "떡볶이", "D동 B1층"],
    ["테이블에이", "http://naver.me/xL1E5JRU", "고기", "C동 1층"],
    ["하남돼지집", "http://naver.me/xv0L2rA3", "고기", "C동 1층"],
    ["한라산아래첫마을", "http://naver.me/GKoJVV8J", "막국수", "C동 B2층"],
    ["호랭이곳간", "http://naver.me/xFprPwWK", "비빔밥", "C동 B2층"],
    ["홍수계찜닭", "http://naver.me/IIqCPGH5", "찜닭", "C동 B2층"],
    ["화레무", "http://naver.me/GkK8Kqys", "고기", "C동 2층"],
  ],
  [
    ["니뽕내뽕", "http://naver.me/GIq8sSbE", "짬뽕", "D동 B1층"],
    ["마라공방", "http://naver.me/Gi9s3VK5", "마라탕", "A동 별관"],
    ["샤오바오우육면", "http://naver.me/5wmOtZQy", "우육면", "C동 B2층"],
    ["화화쿵주마라탕", "http://naver.me/FOvhhUy1", "마라탕", "C동 1층"],
  ],
  [
    ["겐텐", "http://naver.me/xKQWZR5e", "라멘", "B동 B3층"],
    ["나폴리수산", "http://naver.me/5kLXKKNq", "초밥", "C동 1층"],
    ["스시로", "http://naver.me/G3JCUijd", "초밥", "B동 B3층"],
    ["아비꼬", "http://naver.me/xaPf6Exc", "카레", "C동 B2층"],
    ["아오리의행방불명", "http://naver.me/I5Fcamg9", "라멘", "C동 1층"],
    ["저스트텐동", "http://naver.me/GcjWAG8t", "텐동", "A동 별관"],
    ["코코로벤또", "http://naver.me/FGoF6Pzi", "벤또", "B동 B3층"],
    ["홍대돈부리", "http://naver.me/FhAry6Fw", "돈부리", "C동 B2층"],
    ["후라토식당", "http://naver.me/GGhlSQVS", "규카츠", "A동 별관"],
    ["히노아지", "http://naver.me/x0a2Qr3i", "라멘", "C동 B2층"],
  ],
  [
    ["엉클인더키친", "http://naver.me/GaMTLyPn", "쌀국수", "C동 1층"],
    ["포플러스쌀국수", "http://naver.me/xl8i443K", "쌀국수", "C동 B2층"],
  ],
  [["머노까머나", "http://naver.me/FpXMX885", "치킨", "C동 B2층"]],
  [
    ["11브레드", "http://naver.me/G8UtxOEV", "버거", "D동 B1층"],
    ["99왕돈까스", "http://naver.me/FHYAeYbq", "돈까스", "D동 B1층"],
    ["록시드갸토", "http://naver.me/xVl3KZpw", "샌드위치", "C동 1층"],
    ["맘스터치", "http://naver.me/GlVhEK0I", "버거", "D동 B1층"],
    ["미쿡식당", "http://naver.me/5fnjn2WC", "스테이크", "C동 B2층"],
    ["바네스타코", "http://naver.me/5CzppElZ", "타코", "B동 B3층"],
    ["뱅루즈", "http://naver.me/5HSEJ0pr", "파스타", "C동 2층"],
    ["버거앤프라이즈", "http://naver.me/FVPbpEKI", "버거", "C동 B2층"],
    ["선식당", "http://naver.me/5uxc5Vmg", "볶음밥", "C동 B2층"],
    ["쉐이크쉑", "http://naver.me/GgeuPhHH", "버거", "B동 1층"],
    ["써브웨이", "http://naver.me/xWNG5FiP", "샌드위치", "C동 1층"],
    ["아일랜드", "http://naver.me/GLKS64Lg", "스테이크", "B동 B3층"],
    ["웨스턴스토리", "http://naver.me/xhHQUmQX", "피자", "C동 2층"],
    ["정씨함박", "http://naver.me/5JJQ6V6e", "함박", "B동 B3층"],
    ["지아니스나폴리", "http://naver.me/GQ4YbmpY", "피자", "C동 B2층"],
    ["한끼맛있다", "http://naver.me/FuVEoVBn", "스테이크", "C동 B2층"],
  ],
];

let selected;

const korean = document.getElementById("korean");
const chinese = document.getElementById("chinese");
const japanese = document.getElementById("japanese");
const vietnamese = document.getElementById("vietnamese");
const indian = document.getElementById("indian");
const western = document.getElementById("western");

let length;

function select() {
  selected = [];

  if (korean.checked) {
    selected.push(...places[0]);
  }

  if (chinese.checked) {
    selected.push(...places[1]);
  }

  if (japanese.checked) {
    selected.push(...places[2]);
  }

  if (vietnamese.checked) {
    selected.push(...places[3]);
  }

  if (indian.checked) {
    selected.push(...places[4]);
  }

  if (western.checked) {
    selected.push(...places[5]);
  }

  length = selected.length;
}

korean.addEventListener("change", select);
chinese.addEventListener("change", select);
japanese.addEventListener("change", select);
vietnamese.addEventListener("change", select);
indian.addEventListener("change", select);
western.addEventListener("change", select);

select();

const result = document.getElementById("result");

function random() {
  let place = selected[Math.floor(Math.random() * length)];
  result.innerHTML = `
    <a href="${place[1]}" target="_blank">
      <u>${place[0]}</u><br />
      <br />
      ${place[2]}<br />
      ${place[3]}
    </a>
  `;
}

document.getElementById("button").addEventListener("click", random);

const guide = document.getElementById("guide");

guide.addEventListener("click", () => {
  guide.style.display = "none";
});
