function save() {
  window.event.preventDefault()
  let name = document.querySelector("input[name='name']").value
  let programmingLeng = document.querySelector("select[name='programming-lang']").value
  alert(`
    Nome: ${name}
    Linguagem de programação: ${programmingLeng}
  `)
}