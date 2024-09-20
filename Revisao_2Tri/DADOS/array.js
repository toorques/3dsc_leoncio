// ARRAY  -> estrutura de dados indexada
// { }, [ ], { }
//são interavéis, ou seja, podem ser percorridos até seu limite
// loops / ciclos de repetição -> for, for in, for of, foreach
// for > inicialização , condição de parada, incremento (passo ou step)

const pokemonList = ["Pikachu", "Bulbassauro", "Charmander", "Squirtle"]; 
//                  0            1            2            3

console.log(pokemonList[3]) // squirtle
for (let i = 0; i < pokemonList.length; i++) {
    console.log(pokemonList[i])
}

for (let pokemon in pokemonList) {
  console.log(pokemonList[pokemon])
}

for (let pokemon of pokemonList) {
  console.log(pokemon)
}