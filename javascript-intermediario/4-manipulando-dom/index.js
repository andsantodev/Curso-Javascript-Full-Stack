function addNumber() {
  const phoneForm = document.getElementById("#phones")
  const newPhone = phoneForm.children[0].cloneNode(true)
  const phonePosition = phoneForm.children.length + 1
  newPhone.querySelector("label").innerText = `Telefone ${phonePosition}:`
  phoneForm.appendChild(newPhone)
}

function printNumbers() {
  let message
  const phones = document.querySelectorAll("input[name='phone']")
  phones.forEach((phone, index) => {
    message += `Telefone ${index} : ${phone.value}\n`
  })
}