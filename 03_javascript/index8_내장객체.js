/*
    Date 객체
        - 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
        - 원하는 값으로 초기화 가능
*/
let now = new Date();
console.log(now);
//new Date("날짜 문자열");
console.log(new Date("September 30, 2000 13:00:00"));
console.log(new Date(2002, 3, 2, 1, 1, 20));

console.log(now.getFullYear(), "년");
console.log(now.getMonth(), "월"); // 월 : 0~11
console.log(now.getDate(), "일"); // 며칠?
console.log(now.getHours(), "시"); // 시간(0~23)
console.log(now.getMinutes(), "분"); // 분(0~59)
console.log(now.getSeconds(), "초"); // 초(0~59)
console.log(now.getMilliseconds(), "초"); // 밀리초(0~999)
console.log(now.getDay(), "요일"); // (0~6) : 0 일요일, 1 월요일 .. 6 토요일

/* Math 객체
 */
console.log(Math.PI); // 파이
console.log(Math.E); // 자연로그 e
console.log(Math.SQRT2); // 루트 2

// 메소드
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, -5, -7.1)); // 7.1
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 9)); // 9
console.log(Math.ceil(5.1)); // 6 (올림 - 정수)
console.log(Math.floor(5.9)); // 5 (내림 - 정수)
console.log(Math.round(5.6)); // 6 (반올림 - 정수)
console.log(Math.random()); // 0 <= x < 1 (0부터 1사이의 랜덤수)
console.log(Math.random() * 3); // 0 <= x < 3  (0은 포함하고 3은 포함하지 않는
console.log(Math.floor(Math.random() * 3)); // 소수점 버림

// 0 <= x < 45
// 1 <= x < 46
console.log(Math.floor(Math.random() * 45) + 1);

// object 관련 객체
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Busan: "051",
  Ulsan: "052",
  Gwangju: "062",
  Jeju: "064",
};

const obj = new Object({
  a: "10",
  b: "55",
});

console.log(obj);

// 각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area);
console.log(number);

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits1.filter((el) => {
  return fruits2.includes(el);
});
console.log(same);

let diff = fruits1.filter((el) => {
  return !fruits2.includes(el);
});
console.log(diff);

// if 사용
let today = new Date();
if (0 < today.getDay() < 6) {
  console.log("평일");
} else {
  console.log("주말");
}

// switch 사용
let today2 = new Date();
switch (today2.getDay) {
  case 0:
  case 6:
    console.log("주말");
  default:
    console.log("평일");
    break;
}

// 삼항연산자 사용
let today3 = new Date();
today3.getDay() === 0 || today3.getDay() === 6
  ? console.log("주말")
  : console.log("평일");

//랜덤 숫자 뽑기
//0 ~ 10 사이 랜덤한 숫자 출력 프로그램 작성
console.log(Math.floor(Math.random() * 11));
