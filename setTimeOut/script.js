// Set interval executa a cada x milisegundos
// let n = 0


// Set Time Out - executa após x milisegundos
// setInterval(function(){
//   console.clear()
//   console.log(n)
//   n++
// }, 1000)
// setTimeout(function(){
//   console.log('Executou')
// }, 5000)

// const intervalo = setInterval(function(){
//     console.clear()
//     console.log(`Contador: ${n}`)
//     n++
//   },1000)

// setTimeout(function() {
//   clearInterval(intervalo)
//   // redirecionar para outra página
//   location.href = "https://www.google.com.br"

// }, 5000)



/**  A patir dos conceitos aprendidos , resolva:
  * A) Crie uma função SetInterval que receba uma função e um tempo de 3s
  * B) Dentro dela imprima um número randomico de 1 a 10
  * C) Após percorridos 8s interrompa com setTimeout
*/
// gerar os num aleatorios de 3 em 3 seg
const intervalo2 = setInterval(function(){
  let num = Math.round(Math.random() * 10)
  console.log(num)
}, 3000)

// criar set time out para parar o intervalo
setTimeout(function(){
  clearInterval(intervalo2)
  location.href = "https://www.google.com.br"
}, 8000)


