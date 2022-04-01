class Spaceship {
  static get DECELERATION_RATE(){
    return 0.17
  }
  constructor(nome, tripulantes){
    this.nome = nome
    this.tripulantes = tripulantes
    this.velocidadeAtual = 0
  }
  speedUp(aceleracao){
    this.velocidadeAtual += aceleracao * (1 - Spaceship.DECELERATION_RATE)
  }
}