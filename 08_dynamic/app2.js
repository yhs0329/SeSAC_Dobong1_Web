const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); // 뷰 엔진 ejs 사용
app.set("views", "./views"); //views 폴더 위치 설정

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  // 가장 처음 경로로 들어갔을 때(요청했을 때)
  res.render("practice/prac2"); //
});

// axios
const id = "aaa";
const pw = "1234";
app.post("/axios", function (req, res) {
  if (req.body.id === id && req.body.pw === pw) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
