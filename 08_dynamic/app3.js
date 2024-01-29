const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("practice/prac3");
});

const id = "aaaa";
const pw = "1234";
app.post("/axios", (req, res) => {
  if (id === req.body.id && pw === req.body.pw) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
