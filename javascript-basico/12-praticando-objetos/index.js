
// Objeto
let nave = {
  velocity: 0,
  acelerar: function(acelerando){
    this.velocity += acelerando
  }
}

// registro de naves
function registroNave(){
  nave.name = prompt(`Nome da nave:`, ``)
  nave.type = prompt(`Tipo da nave:`, ``)
  nave.maxVelocity = +prompt(`Velocidade máxima da nave:`, ``)
}

// aceleração
function aceleracao() {
  let acelerar = +prompt(`Quanto você deseja acelerar?`, ``)
  nave.acelerar(acelerar)
  if (nave.velocity > nave.maxVelocity) {
    alert(`Velocidade Máxima \nVelocidade da nave: ${nave.velocity} \nVelocidade maxima da nave: ${nave.maxVelocity}`)
  }
}

// parar
function parar() {
  alert(`Nome: ${nave.name} \nTipo: ${nave.type} \nVelocidade da nave: ${nave.velocity} \nVelocidade máxima da nave: ${nave.maxVelocity}`)
  nave.velocity = 0
}

// menu
function menu() {
  let opcao
  do {
    opcao = prompt(`Voce deseja \n1-Acelerar \n2-parar`, ``)
    switch (opcao) {
      case "1":
        aceleracao()
        break;
      case "2":
        parar()
        break;
      default:
        alert(`Operação inválida`)
        break;
    }
  } while (opcao != "2");
}

registroNave()
menu()