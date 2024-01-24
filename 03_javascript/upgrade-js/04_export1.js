// 모듈 만들기 export 이용
// 한 번에 내보내기

const flower = ["rose", "sunflower", "yulip"];
function getFlowers(idx) {
  if (idx >= flower.length || idx < 0) return "x";
  return flower[idx];
}

export { flower, getFlowers };
export { flower as flr, getFlowers as getFlr };
