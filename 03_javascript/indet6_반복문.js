/* 
    1. for 문
    for(변수 선언과 초기값 할당; 조건식(어디까지 증가?감소?));증감식){
    반복한 코드;
    }
*/

for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕", i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕하세요 ${i}`);
}
console.log("아래 3개는 같은 값");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 감소

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지의 덧셈
console.log("-------------------------");

let n = 11;
let sum1 = 0;

for (let i = 1; i < n + 1; i++) {
  sum1 = sum1 + i;
}
console.log(sum1);

/* 배열과 함께 사용하는 for문 */

let fruits = ["사과", "망고", "오렌지", "망고스틴"];
console.log(fruits.length); // 배열의 길이 확인

for (let i = 0; i <= fruits.length; i++) {
  //fruits의 길이(4)보다 짧을 때 까지 반복
  console.log("i like", fruits[i - 1]);
}

// 배열 요소의 합 구하기
let numsArr = [90, 80, 70, 60, 50];
let sum2 = 0;
for (let i = 0; i < numsArr.length; i++) {
  sum2 = sum2 + numsArr[i];
}
console.log(sum2);

/*
    2. while문

    초기화식
    while(조건식){
    조건이 참일 때 실행할 문장;
    증감식
    }
*/

let n2 = 1; // while문의 초기화 식
while (n2 <= 5) {
  //조건식
  console.log(n2); // 실행문
  n2++; // 증감식
}
console.log("-----------------");

n2 = 10;
while (n2 > 4) {
  console.log(n2);
  n2--;
}

// 1 ~ 10 짝수만 출력 while문 사용
console.log("-----------------");

n2 = 1;
while (n2 <= 10) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2++;
}

// 10부터 1까지 감소하는데 홀수만 출력
console.log("-----------------");

n2 = 10;
while (n2 > 0) {
  if (n2 % 2 === 1) console.log(n2);
  n2--;
}
console.log("-----------------");

let b = 0;
while (true) {
  console.log(b);
  b++;
  if (b > 10) break;
}

console.log("-----------------");

let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  // i가 짝수일 때 반복하지 않고 다음 반복으로 넘김
  sum3 += i;
}
console.log(sum3);
console.log("-----------------");

// let n3 = 0;
// while (confirm("계속 진행할까요?")) {
//   n3++;
//   alert(`${n3}번째 alert 창`);
// }

// 10000까지의 숫자 중에서 13의 배수이면서 홀수인 숫자 찾기

for (let i = 0; i < 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) console.log(i);
}

//입력 받은 수가 13의 배수이면서 홀수인 수 찾기

let aa = prompt("13의 배수이면서 홀수인 수 찾기");
aa = Number(aa);
if (aa % 13 === 0 && aa % 2 === 1) {
  alert("정답!");
} else {
  alert("오답!");
}

// for문 사용 구구단 만들기

for (let i = 2; i <= 9; i++) {
  console.log(`===${i}단===`);
  for (let n = 1; n <= 9; n++) {
    console.log(`${i} x ${n} = ${i * n}`);
  }
}

// 0 ~ 100 숫자 중에서 2또는 5의 배수 총합 구하기 - 코딩온 실습 해답 페이지 참고
