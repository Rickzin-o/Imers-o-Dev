var seuNome = prompt("Olá! Qual o seu nome?");

function converter(cotacao, moeda) {
  var valorEmDolar = prompt(`Digite um valor em ${moeda}.`);

  var valorEmReal = valorEmDolar * cotacao;
  valorEmReal = valorEmReal.toFixed(2);

  alert(`${seuNome.trim()}, o valor em reais é R$ ${valorEmReal}`);
}
