// 0 = Cuphead; 1 = Undertale; 2 = Hollow Knight; 3 = Dead Cells; 4 = Stardew Valley; 5 = Terraria; 6 = Spelunky; 7 = Don't Starve Together
listaJogos = ["https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg", "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg", "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg", "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg", "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/239350/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/322330/header.jpg"]
nomesJogos = ["Cuphead", "Undertale", "Hollow Knight", "Dead Cells", "Stardew Valley", "Terraria", "Spelunky", "Don't Starve Together"]

// Links que direcionam pra Steam
listaSteam = ["https://store.steampowered.com/app/268910/Cuphead/", "https://store.steampowered.com/app/391540/Undertale/", "https://store.steampowered.com/app/367520/Hollow_Knight/", "https://store.steampowered.com/app/588650/Dead_Cells", "https://store.steampowered.com/app/413150/Stardew_Valley", "https://store.steampowered.com/app/105600/Terraria", "https://store.steampowered.com/app/239350/Spelunky", "https://store.steampowered.com/app/322330/Dont_Starve_Together/"]

// Laço que vai colocar as imagens na página
for (var i=0; i<listaJogos.length; i++) {
  var urlJogo = listaJogos[i] // Essa variável contem o URL do jogo com índice i
  
  // Confere se o URL termina com "jpg", "jpeg" ou "png"
  if (urlJogo.endsWith("jpg") == true || urlJogo.endsWith("jpeg") == true || urlJogo.endsWith("png") == true) {
    document.getElementById("games").innerHTML += `<div class="game-block"><a href="${listaSteam[i]}" target="_blank"><img src=${urlJogo} class="game-banner"></a><label>${nomesJogos[i]}</label></div>`
  }
}