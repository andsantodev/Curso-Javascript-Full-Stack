alert(`Simulaçao de um sistema de navegação`)

let dobraEspacial = 0
let opcao = ""
let nomeNave = prompt(`Nome de nave`)

opcao = prompt(`Deseja entrar em dobra espacial?\n1-sim \n2-não`)

while (opcao == "1") {
  dobraEspacial++; //dobraEspacial += 1;
  opcao = prompt(`Deseja realizar a próxima dobra espacial?\n1-sim \n2-não`)
}

alert(`Nome do usuário ${nomeNave}. Numero de vezes ${dobraEspacial}`)