const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Voilà la reponse de server qui fonctionne bien du coup!");
});

server.listen(process.env.PORT || 3000);
