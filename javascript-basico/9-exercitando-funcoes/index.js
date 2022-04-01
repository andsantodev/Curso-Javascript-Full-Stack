let naveName = prompt(`Nome da nave`, ``)
let velocity = 0

function acelerar() {
  return velocity += 5;
}
function desacelerar() {
  return (velocity == 0)
    ? alert(`Nave parada. Não é possível desacelerar`)
    : velocity -= 5;
}
function imprimir() {
  return alert(`Nome da nave: ${naveName}, e sua velocidade: ${velocity}`);
}

function menuOption() {
  let menu = prompt(`Digite a opção desejada \n1 - Acelerar a nave em 5 km/s \n2 - Desacelerar em 5 km/s \n3 - Imprimir os dados de Bordo \n4 - sair do programa`, ``)
  
  switch (menu) {
    case `1`:
      acelerar()
      menuOption()
      break;
    case `2`:
      desacelerar()
      menuOption()
      break;
    case `3`:
      imprimir()
      let continuar = confirm(`Deseja continuar?`);
      (continuar) ? menuOption() : alert(`Saindo do programa`)
      break;
    case `4`:
      alert(`Saindo do programa`)
      break;
    default:
      alert(`Opção invalida`)
      menuOption()
      break;
  };
}

menuOption()