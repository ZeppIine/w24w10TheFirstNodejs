const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const responseData = {
    status: "success",
    message: "안녕하세요",
  };

  res.end(JSON.stringify(responseData));
});

server.listen(port, () => {
  console.log("서버 실행 (포트: " + port + ")");
});

// node 버전 18.18.0
// npm 버전 9.8.1
// 정상 작동
