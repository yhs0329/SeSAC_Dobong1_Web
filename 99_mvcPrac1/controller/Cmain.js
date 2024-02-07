const user = require("../model/data");

// controller - 경로와 연결될 함수 내용 정의
// 경로와 연결되는 함수이기 때문에, req와 res 사용

exports.main = (req, res) => {
  res.render("index");
};
// (6) exports.main을 통해 res.render("index") index 파일 렌더링
// -> (7) 로그인 성공 실패 메시지 표시를 위해 다시 routes폴더의 index.js로 이동

exports.login = (req, res) => {
  console.log(user);
  // (10) user, model 폴더의 data를 조회하면
  // { data: [Function (anonymous)] } 라는 함수가 조회된다.)
  console.log(user.data());
  // user의 data()라는 함수를 조회하면
  // data 파일에 return 하도록 설정해둔
  // { id: 'aaaa', pw: '1234' }가 조회된다.
  // 즉, user.data() = id와 pw 객체
  if (user.data().id === req.body.id && user.data().pw === req.body.pw) {
    // data 파일에서 조회한 id와pw가 req.body로 받은 id와 pw와 일치한다면
    // true, 아니면 false 값을 views의 index 파일로 응답. 응답해준다.
    // -> (11) views의 index 파일로 이동
    res.send(true);
  } else {
    res.send(false);
  }
};
// (8) exports.login으로 user라는 변수 console.log로 확인
// user는 상단에 require("../model/data");로
// data가 저장된 model 폴더의 data.js를 연결
// -> (9) data 파일로 이동해서 안에 임시로 저장할 데이터, 즉 id와 pw를 설정해둔다.
