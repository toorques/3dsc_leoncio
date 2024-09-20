//  Crie um modulo esm personagem.js
// crie funções para:
// imprimir um objeto com (nome, poder, vida)
// exporte a  função  (imprimirDadosPersonagem) para outro módulo
// exporte o módulo (imprimirDadosPerson) no se arquivo
// index.js
// utilize o módulo importado

import { imprimirDadosPerson } from "./personagem.js";
const personagem = imprimirDadosPerson("Sampo", 200, 430);

console.log(personagem);
console.log(personagem.nome);
console.log(personagem.poder);
console.log(personagem.vida);

// CRIE UM MODULO CSJ
// IMPORTE AS FUNÇÕES (PATH, FS)
// EXPORTAR PATH, FS
//IMPORTE NO INDEX

import { path, fs } from "./MODULOS/pathfs.cjs";
console.log(path, fs)
