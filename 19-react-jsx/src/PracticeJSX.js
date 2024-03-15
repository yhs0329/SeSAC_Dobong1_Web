// 함수형 컴포넌트로
let name = "탐비";
let animal = "진돗개";
let a = 6;
let b = 5;

export default function prac1() {
  return (
    <div>
      <h2>제 반려동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <div>{3 + 5 === 8 ? "정답입니다." : "오답입니다."}</div>
      <br></br>
      <div>{a > b && "a가 b보다 큽니다."}</div>
      <br></br>
      <div className="container">
        <h1 className="prac4">Hello World</h1>
        아이디 : <input type="text"></input>
        <br></br>
        비밀번호 : <input type="password"></input>
      </div>
    </div>
  );
}
