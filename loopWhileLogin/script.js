/** DESAFIO-01 */

// crie um loop que rode
// enquanto o usuário não estiver logado
// verifique usuário e senha
// se os dados estiverem errados:
// Informe o erro
// Senão
// Dê Boas-Vindas!

// window.prompt("prompt")

// const usuario = "Admin"
// const senha = "1234"
// let estaLogado = false
// let u, s = ""

// while(!estaLogado){
//     u = prompt("Digite o usuário")
//     s = prompt("Digite a senha")

//     if( u == usuario && s == senha){
//         estaLogado = true
//            alert("Olá! Seja Bem-Vindo!", usuario)
//         } else
//            alert("Usuário ou senhas inválidos...")
//     }

/** DESAFIO-02 */
// cRIE UM PROGRAMA QUE
// PEÇA AO USUÁRIO PARA
// ADVINHAR MEU NÚMERO DA SORTE:
// Crie um loop while
// Meu número: math.random( ) * 50
// Número de tentativas == 3
// Checar com IF/ELSE

numeroDaSorte = Math.round(Math.random() * 50);

console.log(numeroDaSorte);
