const meuNome = "Veritas";

function imprimeNome() {
  console.log(`Meu nome é: ${meuNome}!`);
}

export function caixaAlta(nome) {
  return nome.toUpperCase();
}
  export function caixaBaixa(nome) {
    return nome.toLowerCase();
  }
// EXPORTAÇÃO DEFAULT PADRÃO
function separarPorHifen(nome) {
  return nome.split(" ").join('-');
}
export default separarPorHifen;

// EXPORTAÇÃO POSTERIOR DE VALORES
export {meuNome, imprimeNome};