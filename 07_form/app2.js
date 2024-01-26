// const express = require("express");
// const app = express();
// const PORT = 8080;

// app.set("view engine", "ejs");
// app.set("views", "./views/practice");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); //json 형식으로 데이터를 주고 받음

// app.get("/", function (req, res) {
//   res.render("index2");
// });

// app.get("/getIn", function (req, res) {
//   console.log(req.query);
//   res.send("데이터 받기 성공");
//   res.render("result2", {
//     title: "GET",
//     userInfo: req.query, // {id:'',e-mail:'',pw:''}
//   });
// });

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });
