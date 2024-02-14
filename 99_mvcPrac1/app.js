const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// - 기존 루트(/)라우팅
// app.get("/", (req, res) => {
//   res.render("index");
// });

// (1). 특정 시작 url의 역할 구분
const indexRouter = require("./routes");
app.use("/", indexRouter);
// app.user 로 루트에 대한 요청을 indexRouter,
// indexRouter는 ./routers 경로에서 require
// -> (2) routes의 index파일로

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
