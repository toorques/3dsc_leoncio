// criar servidor
const express = require("express");
const app = express();
const PORT = 3333;

// criar rotas
app.get("/", (req, res) => {
  res.send("<p>Parágrafo,,,,</p>");
});
// rodar servidor numa dada porta
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
