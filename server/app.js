const express = require("express");
const path = require("path");
const open = require("open");

const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  const message = `
  Ứng dụng đã được khởi chạy
  * Click link http://localhost:3000 hoặc copy paste vào trình duyệt để truy cập ứng dụng
  * Thoát ứng dụng: Ctrl + C hoặc ấn thoát
  `;
  console.log(message);
  open("http://localhost:3000");
});
