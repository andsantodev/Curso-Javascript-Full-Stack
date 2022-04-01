class App {
  constructor(){
    this.spaceship = null
  }
  start(){
    this.enrollSpaceship()
    let opcao
    do {
      opcao = this.showInitialMenu()
      this.redirectFeature(opcao)
    } while (opcao != "3");
    this.mostrarSair()
  }
  enrollSpaceship() {
    let nome = prompt("Qual o nome da nave?")
    let tripulacao = prompt("Qual a quantidade de tripulates?")
    let spaceshipKind = this.askForSpaceshipKind()
    if(spaceshipKind == "1") {
      let armas = prompt("Quantas armas a nave possui?")
      this.spaceship = new BattleSpaceship(nome, tripulacao, armas)
    } else {
      let carga = prompt("Quantos lugares a nave possui?")
      this.spaceship = new TransportSpaceship(nome, tripulacao, carga)
    }
  }
  askForSpaceshipKind() {
    let chosenOption
    while(!["1", "2"].includes(chosenOption)) {
      chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
    }
    return chosenOption
  }
  showInitialMenu() {
    const promptMessage = `O que você deseja fazer?\n1- Acelerar a nave\n2- Trocar a nave\n3- Imprimir e sair`
    let chosenOption = prompt(promptMessage)
    while(!["1", "2", "3"].includes(chosenOption)) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }
  redirectFeature(chosenOption) {
    switch(chosenOption) {
      case "1":
        this.accelerateSpaceship()
        break
      case "2":
        this.enrollSpaceship()
        break
    }
  }
  accelerateSpaceship() {
    let aceleracao = +prompt("Quanto gostaria de acelerar?")
    this.spaceship.speedUp(aceleracao)
  }
  mostrarSair() {
    let finalMessage = `Nome: ${this.spaceship.nome}\nQuantidade de tripulates: ${this.spaceship.tripulantes}\nVelocidade atual: ${this.spaceship.velocidadeAtual}`
    alert(finalMessage)
  }
}