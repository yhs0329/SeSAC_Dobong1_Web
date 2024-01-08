/* 

    함수
        -어떤 작업을 수행하기 위해 "독립적으로 설계된 코드의 집합"
        -함수를 정의(선언)하고 호출(사용)
        -선언 방식은 3가지
            -함수 선언문
                -선언 후 어디에서나 사용 가능
            -함수 표현식
                -선언 이후에만 사용 가능
            -화살표 함수
                -화살표 함수와 함수 표현식은 변수에 익명함수를 담아둔 모양
                -화살표 함수와 함수 표현식은 동일함(모양만 다름)
*/
// 함수 선언문

helloWorld1();

function helloWorld1() {
  console.log("hello world1!!");
}

// 함수 표현식
// helloworld2(); -> error   표현식 이전에 사용하면 에러남

const helloWorld2 = function () {
  console.log("hello World2");
};
helloWorld2();

// 화살표 함수

// helloWorld3(); -> error  화살표 함수 이전에 사용하면 에러남

const helloWorld3 = () => {
  console.log("hello world 3");
};
helloWorld3();

// 함수에 인자(parameter) 전달
function add1(num1, num2) {
  console.log(num1 + num2);
}
// 콘솔 로그로 찍는 num1과 2는 값을 undefined
add1(1, 2);

/* return은 값을 저장하고 반환함(=함수 실행 중단)
    - 반환 값으로 함수 내부 코드의'최종 결과값'을 가지고 있는 것
    - console.log 등으로 출력하는데 그치지 않고
    값을 저장하고 보관하기 위한 키워드
    - return을 만나면 함수 실행 중단
*/
const add2 = function (num1, num2) {
  console.log("리턴 전에는 실행 됨");
  return num1 + num2;
  console.log("리턴 이후에는 실행되지 않음");
};

console.log(add2(3, 5));
const result1 = add2(3, 5);
const result2 = add1(1, 1);
console.log(result1);
console.log(result1);
console.log(result2);
console.log("-------------");

const sayHello = function (text) {
  return text;
};

console.log(sayHello("allie"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("hi", "allie"));

// 함수 표현식, 화살표 함수

const sayHello3 = function (text, name) {
  return text + name;
};
console.log(sayHello3("hi", " allie"));

const sayHello4 = (text, name) => {
  return text + name;
};

console.log(sayHello4("hi4", " allie"));

// 함수 만들기 실습 1
function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(2, 19));

// 함수 만들기 실습 2

const square = function (num1) {
  console.log(num1 ** num1);
};

square(2);
