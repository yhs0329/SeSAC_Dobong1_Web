const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

// const indexRouter = require("./routes/index");
const indexRouter = require("./routes");
//localhost:8080/ 경로를 기본으로 하는 경로는
// indexRouter에서 처리
app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// // 임시 DB
// const comments = [
//   {
//     id: 1,
//     userid: "apple",
//     date: "2022-10-31",
//     comment: "안녕하세요~",
//   },
//   {
//     id: 2,
//     userid: "banana",
//     date: "2023-11-01",
//     comment: "반가워요.",
//   },
//   {
//     id: 3,
//     userid: "cocoa",
//     date: "2024-01-01",
//     comment: "코코아는 맛있어요.",
//   },
//   {
//     id: 4,
//     userid: "donut",
//     date: "2022-08-17",
//     comment: "점심시간이 다가오는군요.",
//   },
// ];

app.get("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is open`);
});
