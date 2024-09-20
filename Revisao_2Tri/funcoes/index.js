 // declarar funções.

function imprimeOla() {
  console.log("Olá!");
}
function olaPessoa(nome) {
  console.log("Olá, " + nome);
}
let salario = 1000;

// set interval
setInterval(function () {
  salario = salario + 100;
  console.clear();
  console.log(`Salário: RS${salario},00`);
}, 2000);

// CRIE UMA FUNÇÃO QUE RETORNE UM OBJETO JS
// EXECUTE ESSA FUNÇÃO A CADA 1s ATRÁVES DE UMA FUNÇÃO SETINTERVAL()
const pessoa = {
  nome: "abc",
  idade: "10"
}
setInterval(function () {

}, 1000);

// invocar as funções
// imprimeOla();
// olaPessoa("Sparkle");
