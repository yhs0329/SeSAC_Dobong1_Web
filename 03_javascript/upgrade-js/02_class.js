// class : 오브젝트를 만들 수 있는 틀

/*
속성
  - 만들어진 연도 year
  - 집의 이름 name
  - 창문 갯수 window
메소드
  - 건물의 나이 출력 getAge()
  - 창문 개수 출력 getWindow()
*/

class House {
  constructor(year, name, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }
  // 메소드

  getAge() {
    console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다`);
  }
}

// const h1 = {
//     name: 'old',
//     year: 1789,
//     window:1,
// }
//

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, "자이", 10);
house2.getAge();
house2.getWindow();
console.log(house2);

console.log("------------상속-------------");
// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
  }
  //overriding
  // 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
  // 내용은 다르게 만들고 싶을 때, 메소드 재선언
  getWindow() {
    return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`;
  }

  // getAge() << 상속 받아서 사용 가능
}
//   constructor(year, name, window, floor, windowMaker)

const apt1 = new Apartment(2022, "raemian", 19, 50, "KCC");
console.log(apt1.getWindow()); // overriding 함수, 메소드 재정의
console.log("************************************");
console.log(apt1.getAptInfo()); // 새로운 메소드 정의
apt1.getAge(); // 부모 에소드 그대로 상속
console.log(apt1);

// Shape 클래스 만들기
class Shape {
  // 클래스 Shape 생성
  constructor(width, height) {
    // 생성자 width와 height 생성
    this.width = width; // 생성된 객체의 width와 height 속성을 매개변수로 전달된 width 값으로 설정
    this.height = height;
  }
  getArea() {
    // getArea 라는 넓이를 구하는 메소드 생성
    return this.width * this.height;
    // this 키워드는 현재 인스턴스를 가리킴
    // this가 없다면 현재 javascript에 존재하는 width라는 변수를 참조하게 됨
  }
}
let rec1 = new Shape(3, 4);
// Shape 클래스를 호출하려면 반드시 new를 붙여 인스턴스화 시켜야함
// Shape의 constructor(생성자) 함수가 호출되어 새 객체의 초기 상태를 설정(3,4)
console.log(`rec1 - Shape 클래스의 값 : ${rec1.getArea()}`);

// rectangle(직사각형) 클래스 만들기

class Rectangle extends Shape {
  // 새로운 클래스 Rectangle 생성, extends 함수로 Shape을 상속받음
  constructor(width, height) {
    super(width, height); // super로 Shape의 생성자를 호출해서 초기화
  }
  getLine() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
    // 마찬가지로 this를 붙이지 않으면 오류, 현재 인스턴스에서 width를 찾아야함
  }
}
let rec2 = new Rectangle(3, 4);
console.log(`rec2 - 직사각형의 대각선 길이 : ${rec2.getLine()}`);

//Triangle(삼각형) 클래스 만들기

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
let rec3 = new Triangle(3, 4);
console.log(`rec3 - 삼각형의 넓이 : ${rec3.getArea()}`);

// circle 클래스 만들기

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
let rec4 = new Circle(3, 4, 3);
console.log(`rec4 - 원의 넓이 : ${rec4.getArea()}`);
