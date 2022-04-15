function addNewPhone() {
  // seleciona o formulario
  const phoneForm = document.querySelector("form#phones")
  // seleciona o primeiro filho do formulario para ser clonado. No caso a Div
  const newPhone = phoneForm.children[0].cloneNode(true)
  // seleciona o filho do formulario em tamanho e soma + 1
  const phonePosition = phoneForm.children.length + 1
  // seleciona a tag label do filho do form e faz a troca de texto
  newPhone.querySelector("label").innerText = `Telefone ${phonePosition}:`
  // dentro da form ele adiciona o novo telefone com label e id
  phoneForm.appendChild(newPhone)
}

function printPhones() {
  // manter variavel sem valor
  let message = ""
  // seleciona todas as tags input com name phone 
  const phones = document.querySelectorAll("input[name='phone']")
  // percorre cada uma das tags e salva um texto numa variavel
  phones.forEach((phone, index) => {
    message += `Telefone ${index + 1} : ${phone.value}\n`
  })
  // imprime a variavel com a mensagem
  console.log(message)
}