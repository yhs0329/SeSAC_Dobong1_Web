// 문자열에서 사용 가능한 속성/메소드
/*
    - length
    - toUpperCase, trim, indexOf, slice, replace, replaceAll, repeat, split
*/

let str1 = "strawberry Moon";
let str2 = "    strawberry Moon   ";

// 문자열 인덱싱
console.log(str1[3]);
console.log(str1[3] + str1[1] + str1[6]);

console.log("str1의 문자열 길이", str1.length);
console.log("str2의 문자열 길이", str2.length);

let msg = "Happy Birthday~";
let userId = "    user123   ";

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim());
console.log(userId.trim());

// indexOf - 문자를 입력해서 몇 번째인지 숫자로 반환
let mango = "applemango";
console.log(mango.indexOf("p")); // 1
console.log(mango.indexOf("apple")); // 0
console.log(mango.indexOf("mango")); // 5
console.log(mango.indexOf("x")); // 없는 문자는 -1

//slice - 숫자를 입력해서 문자를 반환
console.log(mango.slice(5)); // mango
console.log(mango.slice(3, 6)); // lem
console.log(mango.slice(-1)); // o
console.log(mango.slice(-4)); // ango
// slice 해도 실제 문자열은 변하지 않음

let msg2 = "Wow~ It is so amazing!!! ";
console.log(msg2.replace("Wow", "Hey"));
console.log(msg2.replaceAll("o", "O")); // replace 였다면 첫번째 o 만 대문자로 변경

let date = "2024.1.10";
// 2024-1-10 으로 쓰고싶다면?
date = date.replaceAll(".", "-");
console.log(date);

console.log("abc".repeat(10));

console.log(date.split("-")); // ['2024'], ['1'], ['10']
console.log("--------배열--------");

// 배열 관련 메소드
/* 
    -length(속성)
    - push, pop, unshiftm shift, indexOf, join, reverse
    - includes, map, forEach, find, filter
    - for ~ of (함수 아님) 

*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr1[5] = 6;
arr1[7] = 7; // 비어있음으로 나옴
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6); // 맨 뒤에 배열값 추가
arr1.push(7);
arr1.push(10);
arr1.pop(); // 10 빠짐
arr1.pop(); // 7 빠짐
console.log(arr1);

arr2.unshift("cat"); // 맨 앞에 추가
arr2.shift(); // 맨 앞 삭제
console.log(arr2);

/* includes(매개변수 한 개 - 배열의 요소가 들어감)
    - 매개변수로 들어간 요소가 배열에 있으면 true 없으면 false
*/
console.log(arr2.includes("cat")); // shift로 제거해서 false
console.log(arr2.includes("quakka")); // true

/*
    indexOf - 문자열의 indexOf와 동일
    몇 번 인덱스인지 확인 후 인덱스 값 반환
*/
console.log(arr2.indexOf("rabbit")); // 2

// reverse - 배열의 순서를 실제로 거꾸로 바뀜
arr1.reverse();
console.log(arr1); // 6,5,4,3,2,1

/*
    join - 문자열의 split 메소드와 반대
    배열을 문자열로 변경
*/

// let str1 = "strawberry Moon";

str1 = str1.split(""); // strawberry Moon 이라는 문자열이 배열로 바뀜
console.log(str1);
str1 = str1.join(""); // 배열이 되었던 strawberry Moon가 다시 문자열로 바뀜
console.log(str1);

/*
    반복문 - for of & forEach
*/

let arr3 = [5, 6, 7, 8, 9];
let alphbets = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
console.log("-------------------------");
for (let number of arr3) {
  console.log(number);
}
console.log("-------------------------");
for (let alphbet of alphbets) {
  console.log(alphbet);
}

/*
    forEach - 반복
    배열.forEach(function(element[,inex,array]){})
    */
console.log("----forEach");

arr3.forEach(function (element, index, array) {
  console.log(element, index, array);
});

/*
    filter
    return 이후 조건을 만족하는 요소들을 모아서 배열로 반환
*/

// 1. 함수 표현식
let six = arr2.filter(function (word) {
  return word.length === 6;
});

// 2. 화살표 함수 & return에 있는 ver.

let six2 = arr2.filter((word) => {
  return word.length === 6;
});

// 3. 화살표 함수 & return 없는 ver.(중괄호가 없어야 성립)
let six3 = arr2.filter((word) => word.length === 6);

console.log(arr2);
console.log(six);
console.log(six2);
console.log(six3);

/*
    map
    배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 배열로 반환
*/
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function (element) {
  return element * 3;
});
console.log(multiArr);

/*
    find
    배열에서 특정 조건을 만족하는 첫번째 "요소"를 반환
*/

let findResult = multiArr.find(function (element) {
  return element > 10;
});

console.log(findResult);
console.log("-------------------------");

// 코딩온 배열과 반복문 실습 풀기
let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
console.log(numbers);

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
console.log(sum1, sum2, sum3);

// for문 사용
for (let i = 0; i < numbers.length; i++) {
  sum1 = sum1 + numbers[i];
}
console.log(sum1);

// for of문 사용
for (let num of numbers) {
  sum2 = sum2 + num;
}
console.log(sum2);

//forEach문 사용
numbers.forEach(function (element) {
  sum3 = sum3 + element;
});
console.log(sum3);
