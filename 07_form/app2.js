// 1. 기본 서버 설정
const express = require("express");
// express 모듈을 가져오고
const app = express();
// express 객체를 app에 할당
const PORT = 8080;
// 서버가 리스닝할 포트 번호 8080를 PORT 변수에 할당

// 2. 뷰 엔진 설정
app.set("view engine", "ejs"); // set의 의미 , view engine ??
// "뷰 엔진",을"ejs"로 설정
app.set("views", "./views");
// view 파일이 위치한 경로를 ./views로 설정

// 3. 미들웨어 설정
app.use(express.urlencoded({ extended: true })); // ?
app.use(express.json());
// 미들웨어를 사용해 json형식으로 데이터를 주고 받음

// 4. 라우트 정의
app.get("/", function (req, res) {
  // 루트("/")에 대한 get 요청(app.get)을 처리 function(req,res){}
  // -> 가장 첫 접근?(루트)에 대한 요청이 들어오면
  res.render("practice/practice1.ejs");
  // req = 요청 / res = 응답을 이용해 practice1를 렌더링(경로까지 지정)
  // practice1은
});

app.get("/practice1", function (req, res) {
  // /practice1에 대한 get요청 시 ->
  // /practice1 파일의 form action="/practice1" method="get">
  res.render("practice/result2", {
    // practice 폴더의 /result2를 렌더링(경로 설정 주의!)
    userInfo: req.query,
    // userInfo는 변수 이름처럼 임의로 설정
    // get 요청시에는 query로 받아옴
  });
});

app.post("/practice1post", function (req, res) {
  // /practice1에 대한 get요청 시 ->
  // /practice1 파일의 form action="/practice1" method="post">
  res.render("practice/result2", {
    // practice 폴더의 /result2를 렌더링(경로 설정 오타 주의!)
    userInfo: req.body,
    // userInfo는 변수 이름처럼 임의로 설정
    // post 요청시에는 body로 받아옴
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
