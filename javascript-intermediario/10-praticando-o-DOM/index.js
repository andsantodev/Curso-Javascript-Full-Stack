
// classe tipo de imovel
class Imovel {
  constructor(tipoImovel, area, isAlugado){
    this.tipoImovel = tipoImovel
    this.area = area
    this.isAlugado = isAlugado
  }
}

// classe aplicação
/*
  esssa classe tem varios metodos/funcoes, 
  e no caso uma função chama a outra, 
  tudo isso dentro de uma classe
*/
class App {
  // cria um imovel
  addImovel(){
    window.event.preventDefault()
    let tipoImovel = document.querySelector("select[name='tipoImovel']").value
    let area = document.querySelector("input[name='area']").value
    let isAlugado = document.querySelector("input[name='esta-alugado']:checked").value
    
    // extensão da classe Imovel
    let imovel = new Imovel(tipoImovel, area, isAlugado)

    // agora chamo mais duas funções. Vou add a variavel imovel como parametro para a lista
    this.addImovelLista(imovel)
    this.limparFormulario()
  } 

  // adiciona o imovel na lista
  addImovelLista(imovel){
    let tagLI = document.createElement("li")
    let dadosImovel = `Tipo: ${imovel.tipoImovel}, Area: ${imovel.area}`
    
    // se estiver alugado adiciona uma informação de alugado na lista
    if (imovel.isAlugado == "Sim") {
      let infoAlugado = document.createElement("span")
      infoAlugado.setAttribute("style", "color:white;background-color:red;margin-right:5px;padding:3px")
      infoAlugado.textContent = "ALUGADO"
      
      tagLI.append(infoAlugado)
    }
    tagLI.innerHTML += dadosImovel

    // adiciona botão para remover imovel
    let removerImovel = this.btnRemoverImovel()
    tagLI.append(removerImovel)

    // adiciona toda a li no html
    document.getElementById("lista-imoveis").appendChild(tagLI)
  }

  // botão remover imóvel
  btnRemoverImovel(){
    let btnRemoverImovel = document.createElement("button")
    // btnRemoverImovel.setAttribute("onclick", "app.removerLinha()")
    btnRemoverImovel.innerText = "Remover"
    btnRemoverImovel.style.marginLeft = "10px"
    btnRemoverImovel.addEventListener("click", function (){
      let removerLinha = window.event.target.parentNode
      document.getElementById("lista-imoveis").removeChild(removerLinha)
    })
    return btnRemoverImovel
  }

  // limpar formulario
  limparFormulario(){
    document.querySelector("input[name='area']").value = ""
  }

  // remover linha
  removerLinha(){
    /* salvei a linha em uma variavel para depois excluir ela */
    // let removerLinha = window.event.target.parentNode
    // document.getElementById("lista-imoveis").removeChild(removerLinha)
  }
}

const app = new App()