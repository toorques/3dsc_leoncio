// mostrar dados veiculo
import { mostrarDadosVeiculo } from "./veiculo.js";
const carro = mostrarDadosVeiculo("Ford", "Fiesta", "Ford");
console.log(carro);
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.fabricante);

//acelerar / kms por hora
import { acelerar } from "./veiculo.js";
const kmsh = acelerar(100);
console.log(kmsh);

// cjs
import { fs } from "./require.cjs";
console.log(fs)

// modulo esm
export function printNome(nome) {
  console.log(`Olá, ${nome}!`)
}


