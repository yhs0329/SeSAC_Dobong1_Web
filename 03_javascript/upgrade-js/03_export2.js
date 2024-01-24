/*
    모듈 만들기 (commonJS 방식)
    exports 키워드 사용해서 내보내기
    한 번에 내보내기
*/

// 함수 선언문의 경우, 따로 export 할 수 없어서
// 표현식 or 화살표 함수 사용해서 exports 해야함
exports.sayHi2 = () => {
  console.log("hi2");
};
exports.sayHi3 = function (name) {
  console.log(name);
};
