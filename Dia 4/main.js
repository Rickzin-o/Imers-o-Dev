var listaJogos = []
var listaNomes = []

function adicionarJogo() {
  let urlJogo = document.getElementById("jogo").value
  let nomeJogo = document.getElementById("nome").value
  document.getElementById("jogo").value = ""
  document.getElementById("nome").value = ""
  if (urlJogo != "" && nomeJogo != "") {
    if (urlJogo.endsWith("jpg") == true || urlJogo.endsWith("png") == true) {
      listaJogos.push(urlJogo)
      listaNomes.push(nomeJogo)
      atualizarPagina()
    }
  } else {
    alert("Você esqueceu de alguma informação!")
  }
}

function removerJogo(index) {
  listaJogos.splice(index, 1)
  listaNomes.splice(index, 1)
  atualizarPagina()
}

function atualizarPagina() {
  document.getElementById("lista-jogos").innerHTML = ""
  for (var i=0; i<listaJogos.length; i++) {
    document.getElementById("lista-jogos").innerHTML += `<div class="game-container"><a href="https://store.steampowered.com/search/?term=${listaNomes[i]}" target="_blank"><img src=${listaJogos[i]}></a><label>${listaNomes[i]}</label><button onclick="removerJogo(${i})">X</button></div>`
  }
}