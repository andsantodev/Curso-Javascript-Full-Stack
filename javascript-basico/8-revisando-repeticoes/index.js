let spaceshipName = prompt(`Qual é o nome da nave?`, ``)
let stop = prompt(`Qual letra deseja interromper a execução?`, ``)
let invertedName = ``

// o laço for esta do maior para o menor pq ele esta invertendo a palavra
// sempre que for inverter, subtrair o valor de indice.lenght
for (let indice = spaceshipName.length - 1; indice >= 0; indice--) {
  if (spaceshipName[indice] == stop) {
    break
  }
  invertedName += spaceshipName[indice]
}

alert(`Nome original da nave: ${spaceshipName} \nNome após ocultação: ${invertedName}`)