/*
  Academia - Cadastro de alunos
  Dados: Nome, Idade, convenio ou particular, Modalidade
  Modalidades: Musculação, Luta, Dança
*/ 

// Classe para criação de Objeto Aluno
class Aluno {
  constructor(nome, idade, convenio, modalidade){
    this.nome = nome,
    this.idade = idade,
    this.convenio = convenio,
    this.modalidade = modalidade
  }
}

// cadastro de alunos
let cadastroALuno = function(){
  let nome = prompt(`Nome do aluno`, ``)
  let idade = prompt(`Idade do aluno`, ``)
  let convenio = opcaoConvenio()
  let modalidade = opcaoModalidade()

  let aluno = new Aluno(nome, idade, convenio, modalidade)
  listaAlunos.push(nome, idade, convenio, modalidade)

  return aluno
}

// Lista de Alunos Cadastrados
let listaAlunos = new Array()

// Opção de convenio
opcaoConvenio = () => {
  let opcao = +prompt(`1 - Convênio \n2 - Particular`,``)
  if (opcao == 1) {
    opcao = "GymPass"
  }
  if (opcao == 2) {
    opcao = "Particular"
  }
  return opcao
}

// Opção de modalidade
opcaoModalidade = () => {
  let opcao = +prompt(`Modalidade \n1 - Musculação \n2 - Luta \n3 - Dança`, ``)
  if (opcao == 1) {
    opcao = "Musculação"
  }
  if (opcao == 2) {
    opcao = "Luta"
  }
  if (opcao == 3) {
    opcao = "Dança"
  }
  return opcao
}

// opção invalida
opcaoInvalida = () => alert(`Opção invalida, escolha uma das opções sugeridas`, ``)

// menu

// alguma

cadastroALuno()
console.log(listaAlunos)
