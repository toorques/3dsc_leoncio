// SET TIMEOUT/SET INTERVAL
/* Função nativa que recebe argumentos
 * controla dados a partir de um intervalo
 */
const intervalo1 = setInterval(function () {
  console.log("Olá!");
}, 200);
// Limpar intervalo
clearInterval(Intervalo1);
const TimeOut1 = setTimeout(function () {
  console.log("Olá!");
}, 200);
// Limpar Timeout
clearTimeout(TimeOut1);
//Estrutura de dados
// array -> estrutura de dados indexada
const nomes = ["Sampo", "Firefly", "Veritas"];
nomes[2];

// Objetos literais -> Estrutura chave/valor

const cachorro = {
  patas: 4,
  cor: "branco",
  raca: "borzoi",
  castrado: false,
};

console.log(cachorro);
console.log(cachorro.cor);

Object.keys(cachorro);
Object.values(cachorro);
