const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/", // 파일 업로드하고 그 파일이 저장될 경로
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const id = req.body.id;
      cb(null, id + extension);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우팅 부분
app.get("/", function (req, res) {
  res.render("index");
});

// 회원가입 정보 부분
app.post("/sign", uploadDetail.single("profile"), function (req, res) {
  // /upload를 post 했을 때, multer를 사용해서
  // uploadDetail.single("profile")을 입력해서 파일과 텍스트 처리
  // path이용해서 파일이름,확장자 불러왔기 때문에
  // const path = require("path"); 과
  // const uploadDetail = multer({ 작성, uploadDetail 사용

  console.log(req.body);
  console.log(req.file);
  // req.body로 정보 받아옴
  // req.file은 파일 정보
  res.render("result", {
    // result.ejs를 렌더링
    title: "마이페이지",
    signInfo: req.body, // signInfo 임의로 설정, req.body로 정보 받아서
    fileInfo: req.file,
  }); // result.ejs 파일에서 <%=signInof.name%> 으로 정보 받아옴
});

// 업로드할 사진 부분
app.post("/");
app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
