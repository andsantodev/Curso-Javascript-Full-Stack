alert(`Sistema de simulação de navegação de uma nave`)
let userName = prompt(`Qual é o seu nome?`)
let velocidade = 0
let novaVelocidade = prompt(`Qual velocidade gostaria de acelerar a nave?`)
let confirmacao = confirm(`Deseja realmente ir para ${novaVelocidade}Km?`)

if (confirmacao) {
  // nesse caso o if esta correto. "Se 'confirmacao' for 'true' faça isso..."
  // o sinal de verificação esta oculto, pois poderia ser "if (confirmacao == true)"
  
  // Ja aqui atualizamos a velocidade de zero para a nova velocidade.
  velocidade = novaVelocidade
}

if (velocidade <= 0) {
  alert(`Nave esta parada. Considere partir e aumentar a velocidade`)
} else if (velocidade < 40) {
  alert(`Você esta devagar, podemos aumentar mais`)
} else if (velocidade >= 40 && velocidade < 80) {
  alert(`Parece uma boa velocidade para manter`)
} else if (velocidade >= 80 && velocidade < 100) {
  alert(`Velocidade alta. Considere diminuir`)
} else {
  alert(`Velocidade perigosa. Controle automático forçado`)
}

alert(
  `Nome do piloto ${userName}.
Velocidade atual ${novaVelocidade}Km.`
)

