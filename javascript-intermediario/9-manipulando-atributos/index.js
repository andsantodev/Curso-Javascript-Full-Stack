function status(){
  let valorStatus = document.querySelector("select[name='status']").value

  if (valorStatus == "disabled") {
    document.querySelector("input[name='some-text']").disabled = true

    let idMessage = document.getElementById("message")
    idMessage.innerHTML = "Desabilitado"
    idMessage.style.color = "white"
    idMessage.style.fontSize = "30px"
    idMessage.style.backgroundColor = "red"
  } else {
    document.querySelector("input[name='some-text']").disabled = false

    let idMessage = document.getElementById("message")
    idMessage.innerHTML = ""
    idMessage.style.color = "black"
    idMessage.style.backgroundColor = "transparent"
  }
}