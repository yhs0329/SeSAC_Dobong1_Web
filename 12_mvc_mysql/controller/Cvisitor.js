const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

// GET / visitor
exports.getVisitors = (req, res) => {
  // [DB 연결 전] 임시 데이터베이스
  // console.log(Visitor.getVisitors()); // [{},{}] 배열 형태
  // res.render("visitor", { data: Visitor.getVisitors() });

  // [DB연결 후]
  Visitor.getVisitors((result) => {
    console.log("CVisitor.js 전체목록::", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  // console.log(req);
  console.log(req.params);

  Visitor.getVisitor(req.params.id, (result) => {
    console.log("Cvisitor.js 데이터 하나 조회", result); // {}
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log("body", req.body); // {id, name, comment}
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js post", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js delete", result);
    res.send("몇 번 방명록 삭제 완료");
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}
  Visitor.patchVisitor(req.body, (result) => {
    console.log("Cvisitor.js patch", result);

    res.send("수정 완료");
  });
};
