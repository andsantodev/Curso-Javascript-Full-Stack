let distanciaEmAnosLuz = prompt(`Digite a distancia em Anos Luz`)
let opcao = prompt(`
  Para qual unidade deseja converter?
  1. Parsec (pc)
  2. Unidade Astronomica (AU)
  3. Quilometros (km)
  
  Digite o numero da oção desejada
`)
let opcaoEscolhida
let distanciaConvertida

switch (opcao) {
  case "1":
    opcaoEscolhida = "Parsec"
    distanciaConvertida = distanciaEmAnosLuz * 0.306601
    break;
  case "2":
    opcaoEscolhida = "Unidade Astronomica"
    distanciaConvertida = distanciaEmAnosLuz * 63241.1
    break;
  case "3":
    opcaoEscolhida = "Quilometros"
    distanciaConvertida = distanciaEmAnosLuz * 9.5 * Math.pow(10, 12)
    break;

  default:
    opcaoEscolhida = "Unidade não identificada"
    distanciaConvertida = "Conversão fora do escopo"
    break;
}

alert(
  `Distância em Anos Luz: ${distanciaEmAnosLuz}
  ${opcaoEscolhida}: ${distanciaConvertida}`
)


