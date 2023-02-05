var listaJogadores = [
    { nome: "Paulo", ouro: 0, prata: 0, bronze: 0, pontos: 0 },
    { nome: "Rafa", ouro: 0, prata: 0, bronze: 0, pontos: 0 }
  ];
  
  function atualizarTabela() {
    document.getElementById("tabelaJogadores").innerHTML = "";
    for (var i = 0; i < listaJogadores.length; i++) {
      document.getElementById("tabelaJogadores").innerHTML += `
            <tr>
              <td>${listaJogadores[i].nome}</td>
              <td>${listaJogadores[i].ouro}</td>
              <td>${listaJogadores[i].prata}</td>
              <td>${listaJogadores[i].bronze}</td>
              <td>${listaJogadores[i].pontos}</td>
              <td><button onClick="adicionarOuro(${i})">Ouro</button></td>
              <td><button onClick="adicionarPrata(${i})">Prata</button></td>
              <td><button onClick="adicionarBronze(${i})">Bronze</button></td>
            </tr>`;
    }
  }
  
  atualizarTabela();
  
  function adicionarOuro(indice) {
    let jogador = listaJogadores[indice];
    jogador.ouro++;
    jogador.pontos += 6;
    atualizarTabela();
  }
  
  function adicionarPrata(indice) {
    let jogador = listaJogadores[indice];
    jogador.prata++;
    jogador.pontos += 3;
    atualizarTabela();
  }
  
  function adicionarBronze(indice) {
    let jogador = listaJogadores[indice];
    jogador.bronze++;
    jogador.pontos++;
    atualizarTabela();
  }
  
  function adicionarJogador() {
    let novoJogador = document.getElementById("novo-nome").value;
    document.getElementById("novo-nome").value = "";
    if (novoJogador != "") {
      listaJogadores.push({
        nome: novoJogador,
        prata: 0,
        ouro: 0,
        bronze: 0,
        pontos: 0
      });
      atualizarTabela();
    }
  }
  