/*
    var
        - 재할당, 재선언 모두 가능
        - 재선언은 바람직하지 않음(중복선언)

*/

var name = "홍길동";
var name = "ghdrlfehd";
console.log(name);

/* let 
    - 재선언 불가능
    - 재할당 가능
    - 초기화 작업 필요 없음(최초 선언 시 값 할당하지 않아도 됨)
*/

let c;
c = 10; // 재할당
// let c; -> 재선언(중복 선언) 불가
console.log(c);

/* 
    const
        - 재선언, 재할당 모두 불가
        - 변하지 않는 값을 변수에 저장할 때 사용
        - 최초 선언 시 반드시 값 할당(초기화)
*/

// const b; 초기화 해야함
const b = 10;
// b = 11; const 재할당 불가!

let q1 = 3;
// q1 = q1 - 3; -> q1 값을 바꾸고 싶을 땐 재할당을 해줘야함
console.log(q1);

// 비교 연산자
// (참고) = 는 대입연산자
/* 1. == (값만 비교하는 연산자) */

console.log("== 연산자");
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 1);
console.log("1" == 1);
console.log("1" != 1);

// js의 이상한 점
console.log("" == "0");
console.log(false == "0");
console.log("" == 0);
console.log(undefined == null);

/* 2. === 값과 data type까지 비교하는 연산자 */
console.log("=== 연산자");
console.log("1" === 1);
console.log(undefined === null);
console.log("" === 0);
console.log(1 === 1);

// 크기 비교
console.log("크기 비교 연산자");
console.log(2 > 1);
console.log(1 >= 1);
console.log(2 < 1);
console.log(2 <= 0);
console.log("산술 연산자");
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(7 / 2);
console.log(7 % 2);
console.log(7 ** 2);

// 논리 연산
console.log("논리 연산자");
console.log(!true);
console.log(!!true);
console.log(!!false);
console.log(true && true);
//&&(AND) 연산자는 false일 확률이 높은 조건을 앞쪽에 배치
console.log(true && true && true && false);
console.log(false && true && true && true);
// || (OR 연산자는 true일 확률이 높은 조건을 앞쪽에 배치)
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!(2 > 1));
console.log(2 > 1 && -2 > 1);
console.log((2 > 1 && -2 < 1) || 2 > 5);

// 문자와 변수를 같이 쓰는 방법
const str1 = "allie";
const str2 = "서울";
// allie는 서울에 삽니다. 라는 문장을 출력하고 싶으면
/*
    1. + 연산자 이용(문자열일 때는 문자열을 이어줌)
    2. 
*/
console.log(str1 + "는 " + str2 + "에 삽니다");

console.log(`${str1}는 ${str2}에 삽니다.`);

const str3 = `${str1}는 ${str2}에 삽니다.`;

console.log(str3);

const str4 = str1 + "는 " + str2 + "에 삽니다.";

console.log(str4);
