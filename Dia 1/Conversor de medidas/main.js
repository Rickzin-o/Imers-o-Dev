function lightYearConvert() {
    var inputValor = document.getElementById("anos-luz").value;
    var valorEmKMetros = inputValor * 9.461 * 10 ** 12;
    var valorEmKMetros = valorEmKMetros.toFixed(1);
    alert(`${inputValor} anos-luz equivalem a ${valorEmKMetros} metros`);
  }
  
function celsiusConvert() {
    var inputValor = document.getElementById("celsius").value;
    var valorEmFahrenheit = (inputValor * 9) / 5 + 32;
    alert(`${inputValor}°C equivalem a ${valorEmFahrenheit}°F`);
}
  