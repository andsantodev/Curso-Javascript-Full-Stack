function showInfo(){
  let name = document.querySelector("input[name='name']").value
  let favoriteColor = document.querySelector("select[name='color'] option:checked").text 
  let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
  let developerOptions = document.querySelectorAll("input[name='developer-options']:checked") // naõ tem value

  // array vazio; função para armazenar as opções no array; função para colocar uma virgula
  let optionsValue = []
  developerOptions.forEach(elemento => {optionsValue.push(elemento.value)})
  let optionsChecked = optionsValue.join(", ").toUpperCase()

  // Mostrar dados na tela
  alert(`
    Nome: ${name}
    Cor Primaria: ${favoriteColor}
    Gosta de programar? ${likeProgramming[0].toUpperCase() + likeProgramming.slice(1) /* deixo a primeira letra miuscula */}
    Conhecimento em programação
    ${optionsChecked}`) 
}