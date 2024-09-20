function mostrarDadosVeiculo (marca, modelo, fabricante) {
  return {
    marca: marca,
    modelo: modelo,
    fabricante: fabricante
  }
}
export {mostrarDadosVeiculo, acelerar}

function acelerar (kms) {
  return {
    kms: kms
  }
}