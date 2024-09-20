// require(fs)// require(HTTP)
// CRIAR UM SERVIDOR  WEB PARA INTERPRETARO HTML 
const fs = require('node:fs')
const http = require('node:http')

const PORT = 3000;
const server = http.createServer(function (req, res) {
  if (req.url === "/"){
    fs.readFile("./docs/index.html","utf-8", function (err, arquivo) {
      if (err) {
        console.error("Erro! Erro!" + err);
      } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(arquivo);
        res.end();
        }
      });
    }
  });
servidor.listen(PORT, function (){
  console.log("Servidor rodando na porta " + PORT");
});






