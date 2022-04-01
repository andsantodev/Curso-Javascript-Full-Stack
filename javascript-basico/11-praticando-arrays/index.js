alert(`Praticando Arrays`)
const hitchedSpaceships = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false],
]

// Filtrar nome das naves com mais de 9 tripulantes
let spaceshipFilter = hitchedSpaceships.filter((element) => {
  return element[1] > 9
}).map((nomeNave) => { // precisei cria um map para trazer apenas os nomes
  return nomeNave[0]
})

// Informar index em que esta a primeira nave com engate false
let spaceshipIndex = hitchedSpaceships.findIndex((element) => {
  return element[2] == false
})

// Colocar o nome de todas as naves em uppercase
let spaceshipUp = hitchedSpaceships.map((element) => {
  return element[0].toUpperCase()
})

// alerta com todos os dados
let message = `Todas as informações:`
message += `\nFiltro: ${spaceshipFilter.join(`, `)}`
message += `\nPlataforma: ${spaceshipIndex + 1}`
message += `\nUppercase: ${spaceshipUp.join(`, `)}`

alert(message)