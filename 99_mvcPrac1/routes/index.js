const express = require("express");
// express 모듈 가져오기

const router = express.Router();
const controller = require("../controller/Cmain");
// (2) controller 모듈 가져오기, 경로는 미리 생성한 ../controller의 Cmain.js파일
// -> (3) controller 폴더 생성, Cmain.js 파일 생성
// -> (4) 이 router폴더의 index.js를 내보낼 코드 작성 -> 하단으로

router.get("/", controller.main);
// (5) router.get으로 루트(/) 요청을 받았을 때, controller의 main 함수로 연결
// controller는 (3)에서 설정한 controller/Cmain파일에 작성된 main을 실행함
// -> (6) Cmain 파일로 이동

router.post("/axios", controller.login);
// (7) "/axios" 경로로 post 요청이 들어왔을 때,
// controller폴더의 Cmain파일 안의 login 함수 실행
// -> (8) Cmain 폴더에 login 함수 생성하러 이동

module.exports = router;
// (4) 이 라우터 모듈을 사용할 수 있도록 내보내기
// 이 라우터를 외부에서 require함으로써, 라우터 사용
