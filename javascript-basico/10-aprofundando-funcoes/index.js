// // primeiro uma função que recebe como parametro a velocidade e uma outra função chamada printer 
// function slowDown(velocity, funcPrinter){
//   let deceleration = 20 // valor pare ser reduzido

//   while (velocity > 0) {
//     funcPrinter(velocity) // apenas imprime
//     velocity -= deceleration
//   }

//   alert(`Nave para. As comportas ja podem ser abertas`)
// }

// let spaceVelocity = 150
// slowDown(spaceVelocity, function(velocity){
//   console.log(`Velocidade atual: ${velocity}`)
// })


// ------------------------


let velocidade = 150
let desacelerar = 20

function nomeNave(){
  let nome = prompt(`Qual o nome da nave?`, ``)
  if (nome == `` || nome == null) {
    alert(`Informe o nome da nave.`)
    nomeNave()
  } else {
    // função para diminuir a velocidade que possui 3 parametros: 
    // um valor, uma função, e o retorno da variavel interna "nome"
    diminuir(velocidade, print, nome);
    // retorno com o valor da variavel do prompt 
    return nome;
  }
}

function diminuir(velocidade, print, nome){
  while (velocidade > 0) {
    // enquanto velocidade for maior que zero o "print" vai executar um função
    print(velocidade)
    // diminui a velocidade
    velocidade -= desacelerar
  }
  // função que é executada depois do loop
  desembarque(nome)
}

function print(velocidade){
  // função que apenas imprime um texto
  alert(`Estamos diminuindo a velocidade. \nVelocidade atual: ${velocidade} km/s.`)
}

function desembarque(nome){
  // função que apenas imprime um texto 
  // console.log(nome.substr(-1)); // imprime a ultima letra de uma palavra
  alert(`Nave parada. Todos podem desembarcar. \nObrigado por voarem com a ${nome}.`)
}

// chamada da função principal
nomeNave()