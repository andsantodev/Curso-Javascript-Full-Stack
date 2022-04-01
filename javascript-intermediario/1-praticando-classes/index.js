// Torre dos vingadores com herois na ativa ou não
// Heroi com: Nome, nivel de força, se esta ou não na torre, e se esta equipado para batalha

class Heroi {
  status(nomeHeroi, forca = 100){
    this.nome = nomeHeroi
    this.forca = forca
    this.isTorre = false
    this.isEquipado = false
  }
  hitch() {
    this.isTorre = true
    this.isEquipado = true
  }
}

// cadastrar heroi
let cadastrar = () => {
  let nomeHeroi = prompt(`Nome do Herois:`,``)
  let poderHeroi = +prompt(`Poder do Heroi (em numeros):`,``)
  let heroi = new Heroi(nomeHeroi, poderHeroi)
  listaHerois.push(nomeHeroi, poderHeroi)
  // heroi.status(nomeHeroi, poderHeroi)
  return heroi
}

// lista de herois
let listaHerois = new Array()

// imprimir lista herois
let heroiPrint = () => {
  alert(`Lista de herois: ${listaHerois.join(`, `)}`)
}

// Menu
function showMenu() {
  let opcao
  do {
    opcao = prompt(`Escolha uma opção do menu: \n1-Cadastrar heroi (informar se esta na torre e equipado) \n2-Mostrar lista de herois \n3-Sair do programa`, ``)
    switch (opcao) {
      case "1":
        cadastrar()
        break;
      case "2":
        heroiPrint()
        break;
      case "3": // sair
        break;
      default:
        alert(`Escolha uma opção válida`)
        break;
    }
  } while (opcao != "3");
}

showMenu()