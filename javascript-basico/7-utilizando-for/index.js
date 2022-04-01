alert(`Ocultador de nomes`)

let spaceship = prompt(`Qual o nome da Nave?`)
let charToReplace = prompt(`Qual caracter deseja substituir?`)
let replacementChar = prompt(`Por qual caracter deseja subtituir`)
let newSpaceship = ""

for (let indice = 0; indice < spaceship.length; indice++) {
  if (spaceship[indice] == charToReplace) {
    newSpaceship += replacementChar
  } else {
    newSpaceship += spaceship[indice]
  }
}

alert("O novo nome da nave é " + newSpaceship)
