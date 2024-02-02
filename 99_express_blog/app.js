const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8080;

/*
    temp DB
    임시 데이터 배열 형태로 만들어서 화면에 띄워주는 작업
*/

let tempDB = [
  {
    contentID: 1,
    title: "글 제목1",
    content: "글 내용1",
    img: null, // null or path(string)
  },
  {
    contentID: 2,
    title: "제목2",
    content: "express, ejs, multer 복습",
    img: null, // null or path(string)
  },
  {
    contentID: 3,
    title: "제목3",
    content: "백엔드",
    img: null, // null or path(string)
  },
  {
    contentID: 4,
    title: "제목4",
    content: "글 내용4",
    img: null, // null or path(string)
  },
];

const userId = "Allie";

// 미들웨어 설정
/*
    미들웨어란?
    요청(request)과 응답(response) 사이에서 중단다리 역할을 하는 소프트웨어
    ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
    ex2) request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
    ex3) static 파일 설정을 도와주는 app.use(express.static(~~)) 
*/

/* 
    미들웨어 1. views 설정(set() 이용)
    - view란?
        사람들 눈에 보이는 화면, 프론트 부분 html
    - view 설정
        1. html 파일들을 어디서 모아둘건지(views 폴더 설정)
        2. html을 보여주기 위해서 어떻게 할건지(view engine)
    - view engine (ejs)
        서버에서 보낸 js변수를 클라이언트 사용할 수 있도록 도움
        pug, ejs, nunjucks, ... 등이 있지만 html과 가장 유사한 것은 ejs
*/

app.set("view engine", "ejs");
app.set("views", "./views");

/*
    미들웨어 2. static 폴더 설정
    - static 폴더란?
        외부(브라우저 등의 client)에서 접근 가능한 폴더
        프론트 js, css, 이미지, 동영상, ...
*/

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

/* 
    미들웨어 3. body-parser 설정(express 내장 모듈)
    - req.body 는 기본적으로 undefined 
    - body-parser가 req.body를 서버 측에서 사용할 수 있도록 파싱(parsing)해줌
*/

// true : queryString 모듈 사용,
// false : ps 모듈 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 요청 body에서 json 정보만 가지고 오도록

/*
    미들웨어 4. multer 설정(npm install multer 필요)
    - req.body input type="file"의 정보는 string
        실제 파일 업로드를 하고 파일 정보를 확인하기 위해서 사용
*/
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      /*
          extname(파일명): 확장자 추출
          basename(파일명, 확장자): 확장자를 제외한 파일명만 추출
          basename(경로명): (확장자 포함된) 파일명 추출
         */
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

// ###라우팅
/*
    특정 url로 특정 method에 대한 요청 처리
    - url : 사용자가 정한 url, 
    - method : get, post, put, patch, delete
        메소드는 CRUD를 위한 것
        CRUD : 데이터를 create, read, update, delete)
        1. get : 'R'ead
            브라우저의 url에 주소를 입력하는 것은 모두 get 요청!
            localhost:8080/sesac 의 화면을 보기 위해서는 
            /sesac에 get 요청에 대한 응답(res)이 있어야 볼 수 있음
            res.send() res.end() res.write() res.render(), ... 
        2. post : 'C'reate 새로운 정보를 '입력' '추가'할 때 사용
        3. put & patch : 'U'pdate 수정 관련 메소드
        4. delete : 'D'elete 삭제

*/
app.get("/", (req, res) => {
  res.render("index.ejs", {
    user: userId,
    contentData: tempDB, //[{},{}]
  });
});

/*
    params vs. query
    - params 
        - 서버에서 url을 표기 : /:params
        - 클라이언트에서 요청 시 /123
        - req.params에서 정보 확인 {params : '123'}
        - 네이버 블로그 처럼 여러 계정의 글을 "조회"할 대 == params
    - query
      - 서버에서 url 표기 : /sesac
      - 클라이언트에서 url 표기 : /sesac?id=123&content=123
      - req.query 에서 정보 확인 가능{id:'123' content:'123'}
      - 검색, 필터링 기능 == query
*/
// content/1 content/2 content3/, ...
app.get("/content/:contentID", (req, res) => {
  console.log(req.params); // {contentID : '1'}
  // req.params.contentID
  const { contentID } = req.params;
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0];
  console.log(isContent); // {객체이거나}, undefined

  // const tempDB = [
  //   {
  //     contentID: 1,
  //     title: "글 제목1",
  //     content: "글 내용1",
  //     img: null, // null or path(string)
  //   },

  if (isContent) {
    res.render("content", isContent);
  } else {
    res.render("404");
  }
});

// 새글 작성하기
// /content/write 는 write를 params로 파악할 수 있음
app.get("/write", (req, res) => {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null, // null or path(string)
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);
  // res.send("dddd");
  res.end();
});

app.get("*", (req, res) => {
  res.render("404");
});

// ###포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
