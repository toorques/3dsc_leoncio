//OPERADOR TERNARIO
// São usados para simplificar o processo de tomada de decisão e, eventualmente, substituir if/else

const idade = 18

if( idade>=18){
  console.log("Permitida a entrada");
} else {
  console.log("Proibida para menores")
}
// Com o operador ternario
const passe = idade >= 18 ? "Permitida a entrada" : "Proibida a entrada"
console.log(passe)