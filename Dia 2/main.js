// Pega um número aleatório entre 1 e 1000
var numeroAleatorio = parseInt(Math.random() * 1000) + 1
var chances = 12 // 12 chances parece suficiente, eu acho
var acertou = false

// Função chamada ao clicar no botão "Chutar"
function chutar() {
  var chute = document.getElementById("number-input").value
  var labelNumeroMenor = document.getElementById("menor")
  var labelNumeroMaior = document.getElementById("maior")
	
    if (chances <= 0) {
        alert("Você já gastou todas as suas tentativas!")
        document.getElementById("start-again").hidden = false
        return
    }

	if (acertou == true || chute == "") {return} // Se o usuário acertar ou não preencher o input, a função não faz nada
	
	// Confere se o chute está entre 0 e 1000. Se não estiver, não continua
	if (chute > 1000 || chute < 0) {
		alert("Esse número é maior ou menor que o esperado, tente novamente.")
		return
	}
  
	// Confere se o chute e o número são iguais, faz as mudanças necessárias caso seja verdade
  if (chute == numeroAleatorio) {
    document.getElementById("numero").innerHTML = `Resposta: ${chute}`
    document.getElementById("numero").style.color = "#50f04a"
	document.getElementById("start-again").hidden = false
    labelNumeroMenor.innerHTML = ""
    labelNumeroMaior.innerHTML = ""
    alert('Você acertou!')
		acertou = true
		return
  } else if (numeroAleatorio > chute) {
    labelNumeroMenor.innerHTML = `${chute} <`
    alert('Você errou! O número é maior.')
  } else if (numeroAleatorio < chute) {
    labelNumeroMaior.innerHTML = `< ${chute}`
    alert('Você errou! O número é menor.')
  }
	chances = chances - 1
	document.getElementById("chances").innerHTML = `Você tem ${chances} tentativas`
    document.getElementById("number-input").value = ""
}

// Função para começar o jogo novamente, tirando a necessidade de recarregar a página
function startAgain() {
    numeroAleatorio = parseInt(Math.random() * 1000) + 1
	chances = 12
	acertou = false
	document.getElementById("chances").innerHTML = `Você tem ${chances} tentativas`
	document.getElementById("maior").innerHTML = "< 1000"
	document.getElementById("menor").innerHTML = "0 <"
	document.getElementById("numero").innerHTML = " N "
	document.getElementById("numero").style.color = "#ffffff"
	document.getElementById("start-again").hidden = true
}