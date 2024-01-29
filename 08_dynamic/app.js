const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); // 뷰 엔진 ejs 사용
app.set("views", "./views"); //views 폴더 위치 설정

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  // 가장 처음 경로로 들어갔을 때(요청했을 때)
  res.render("index"); // index 파일 렌더링
});

//ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send("ajax 응답관료");
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
  res.send("fetch 응답 완료");
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// open api 사용
app.get("/open-api", function (req, res) {
  res.render("api");
});

app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
