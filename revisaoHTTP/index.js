const http = require("http"); // Importar http
const PORT = 8000; // Porta o servidor
const servidor = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  if (req.url === "/"){
      res.writeHead(200, "Content-Type", "text/html");
      res.write("<h1>Hello, lovely homepage!</h1>"); // texto que aparecerá na homepage
      res.end();
  }  else if (req.url === "/sobre") {
    res.writeHead(200, "Content-Type", "text/html");
    res.write("<h1>Wanna know more...?</h1>");    // caso não seja a homepage, esse texto                                                           aparecerá
    res.end();
  }
});
// Utilizando a porta do servidor
servidor.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
