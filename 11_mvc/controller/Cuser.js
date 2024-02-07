const User = require("../module/User");
// User.userInfo() // {id:~, pw:~}

// GET  /user
exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
