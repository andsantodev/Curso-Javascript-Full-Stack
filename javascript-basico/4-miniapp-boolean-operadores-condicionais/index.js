let entradaDataPartida = prompt("Digite a data de partida (formato DD/MM/YYYY)")

// converte a data informada 
let dataPartida = moment(entradaDataPartida, "DD/MM/YYYY")

// o dia atual
let diaAtual = moment()

// o momento funciona com segundos, por isso esse tipo de subtração para verificação de data
let diferenca = diaAtual - dataPartida

let opcao = prompt(
  `Escolha como gostaria de exibir o tempo de partida
  1 - Segundos
  2 - Minutos
  3 - Horas
  4 - Dias`
)

// condicional
if (opcao == "1") {
  let segundos = Math.round(diferenca / 1000)
  alert(`Tempo de voo: ${segundos} segundos`)
} else if (opcao == "2") {
  let minutos = Math.round(diferenca / 1000 / 60)
  alert(`Tempo de voo: ${minutos} minutos`)
} else if (opcao == "3") {
  let horas = Math.round(diferenca / 1000 / 3600)
  alert(`Tempo de voo: ${horas} horas`)
} else if (opcao == "4") {
  let dia = Math.round(diferenca / 1000 / 3600 / 24)
  alert(`Tempo de voo: ${dia} dias`)
} else {
  alert(`Opção inválida`)
}