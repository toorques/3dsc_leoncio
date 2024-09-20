
const pessoas = [
  {nome: "GuinaiFen", sexo: "f"},
  {nome: "Kakavasha", sexo: "m"},
  {nome: "Sampo", sexo: "m"},
  {nome: "Tingyun", sexo: "f"}
]
// colocando [] e usando o indice (lembrando que começa do 0),
// podemos acessar um item especifico do array
// exemplo: console.log(pessoas[2].nome)

// for(pessoa of pessoas) {
//   console.log(pessoas.nome)
// }

const meninas = [];  // VAZIO
const meninos = []; // VAZIO

function filtroPessoas(arrPessoas){
  if(typeof arrPessoas == "object"){  // checa se é um array/objeto
    for (pessoa of arrPessoas){      // itera sobre cada item de pesssoas
      pessoa.sexo == "f"           // checa a propriedade "sexo"
      ? meninas.push(pessoa.nome)       // caso Fem
      : meninos.push(pessoa.nome);     // caso Masc
    }
  } else {
    console.error(arrPessoas);    // senao imprime um erro
  }
}
filtroPessoas(pessoas);       // funcao para aproveitamento de codigo

 // for (pessoa of pessoas)
 //  pessoa.sexo == "f" 
 //         ? meninas.push(pessoa.nome)
 //         : meninos.push(pessoa.nome);
   
console.log("+++++ MENINAS::");
console.log(meninas);
console.log("+++++ MENINOS::");
console.log(meninos)