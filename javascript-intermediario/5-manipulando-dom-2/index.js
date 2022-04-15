/*
  Sistema que cria uma lista de casas
  4 infos: Numero da casa, bairro, cidade, área da casa
  Ao clicar em "adicionar" sera mostrado os dados automaticamente abaixo do cadastro
  Ao clicar em "remover" o item deve ser removido da lista
*/ 

/***************************************************************************/ 

// FUNCIONAL
// function adicionarCasa(){
//   let numero = document.querySelector("input[name='numero']").value,
//     bairro = document.querySelector("input[name='bairro']").value,
//     cidade = document.querySelector("input[name='cidade']").value,
//     area = document.querySelector("input[name='area']").value

//   // cria uma lista para e add os dados nela
//   let lista = document.createElement("li")
//   lista.innerHTML = `Numero: ${numero}, Bairro: ${bairro}, Cidade: ${cidade}, Área: ${area} `

//   // criar "botão remover"
//   let removeButton = document.createElement("button")
//   removeButton.type = "button"
//   removeButton.innerHTML = "Remover"
//   removeButton.setAttribute("onclick", "removeCasa(this)")

//   // add botão remover na lista e add lista dentro de ul
//   lista.appendChild(removeButton)
//   document.getElementById("lista-casas").appendChild(lista)
// }

// function removeCasa(botao){
//   // variavel que guarda o pai do botão (parentNode representa o parentesco acima)
//   let removeLi = botao.parentNode
//   document.getElementById("lista-casas").removeChild(removeLi)
// }

/***************************************************************************/ 

// POO

// objeto casa
class Casa {
  constructor(numero = "não informado", bairro = "não informado", cidade = "não informado", area = "não informado"){
    this.numero = numero,
    this.bairro = bairro,
    this.cidade = cidade,
    this.area = area
    this.removerLinha = removerLinha
  }
}

// lista de casas
let listaCasas = []

// função adicionar casa
let adicionarCasa = () => {
  let numero = document.querySelector("input[name='numero']").value
    bairro = document.querySelector("input[name='bairro']").value, 
    cidade = document.querySelector("input[name='cidade']").value, 
    area = document.querySelector("input[name='area']").value
    removerLinha = removerLinha(this)
    
  let casa = new Casa(numero, bairro, cidade, area)
  listaCasas.push(numero, bairro, cidade, area)

  let lista = document.createElement("li")
  lista.innerHTML = `Numero: ${numero}, Bairro: ${bairro}, Cidade: ${cidade}, Área: ${area} `

  document.getElementById("lista-casas").appendChild(lista)  
}

removerLinha = (botao) => {
  let removeLinha = botao.parentNode
  document.getElementById("lista-casas").removeChild(removeLinha)
}

// console.log(adicionarCasa())


