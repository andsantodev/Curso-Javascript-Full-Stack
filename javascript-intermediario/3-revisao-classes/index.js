/*
  sistema de montitoramento de nave espacial
  iniciar pedido dados da nave: Nome, Qtd triuplantes, se é de batalha ou carga
  caso seja de batalha pedir numero de armas
  caso se seja de transporte o numero de lugares que tem
  velocidade atual da nava é zero
  
  mostrar menu para o usuário: Acelerar Nave, Trocar Nave, Imprimir e sair :
  * para acelerar é preciso pedir a aceleração,
  * a velocidade deve aumentar 83% ou seja 17% de desaceleração "velocidade atual + (aceleração * (1 - taxa de desaceleração))"
  * para trocar a nave sera solicitado os dado de cadastro novamente com velocidade zero
  * sair: Apenas mostrar os dados cadastrados e sair:
  * Nome: xxxx
  * tripulantes / armas: xxxx
  * velocidade atual: xxxx
*/

const app = new App()
app.start()