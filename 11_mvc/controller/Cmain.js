const Comment = require("../module/Comment");
/*
controller 에서는 model에서 받은 데이터를 가공해서
view에 전달할 수 있음
*/

// GET
exports.main = (req, res) => {
  res.render("index");
};
// router.get("/", (req, res) => {
//   res.render("index");
// });

// GET / comments
exports.comments = (req, res) => {
  console.log(Comment);
  res.render("comments", { commentInfo: Comment });
};

// GET / comment / :id (params 사용) >> comment.ejs
exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; // 1,2,3,4

  //   if (commentId < 1 || commentId > comments.length) {
  //     return res.render("404");
  //   }

  //   if (isNaN(commentId)) {
  //     return res.render("404");
  //   }

  // 한 번에 처리
  if (!Comment[commentId - 1]) return res.render("404");
  res.render("comment", { commentInfo: Comment[commentId - 1] });
};

// app.get("/comment/:id", (req, res) => {
//   console.log(req.params);
//   const commentId = req.params.id; // 1,2,3,4

//   //   if (commentId < 1 || commentId > comments.length) {
//   //     return res.render("404");
//   //   }

//   //   if (isNaN(commentId)) {
//   //     return res.render("404");
//   //   }

//   // 한 번에 처리
//   if (!comments[commentId - 1]) return res.render("404");
//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });
