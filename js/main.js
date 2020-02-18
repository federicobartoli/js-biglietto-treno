// Acquisire dati
// Numero di Km che vuole percorre
// Età passeggero
// 0.21 € al km

// se minore di 18 20% sconto
// se anni + 65 40% sconto

// 0 +++++++++ 18 -------------- 65 404040404040

var numeroDiKm = prompt('Scrivi il numero di km che vuoi percorrere');
var etaPasseggero = prompt('Scrivi la tua età');
console.log(numeroDiKm);
console.log(etaPasseggero);
document.getElementById('numerokm').innerHTML = 'Vuoi percorre ' + numeroDiKm + ' km';
document.getElementById('etaPasseggero').innerHTML = 'La tua età è  ' + etaPasseggero + ' anni';
var costoBiglietto = 0.21 * numeroDiKm;
console.log(costoBiglietto);
document.getElementById('costoBiglietto').innerHTML = 'Il costo del biglietto è di ' + costoBiglietto + ' €';
if (etaPasseggero < 18) {
    var scontoMinorenni20 = costoBiglietto * 20 / 100;
    console.log(scontoMinorenni20);
    var prezzoScontatoMinori = costoBiglietto - scontoMinorenni20;
    console.log(prezzoScontatoMinori);
    document.getElementById('costoBiglietto').innerHTML = 'Il costo del biglietto è di ' + prezzoScontatoMinori + '€';
}

if (etaPasseggero > 65  ) {
    var scontoAnziani40 = costoBiglietto * 40 / 100;
    console.log(scontoAnziani40);
    var prezzoScontatoAnziani = costoBiglietto - scontoAnziani40;
    document.getElementById('costoBiglietto').innerHTML = 'Il costo del biglietto è di ' + prezzoScontatoAnziani + '€';
}

if (etaPasseggero > 110) {
    document.getElementById('costoBiglietto').innerHTML = 'tu mi stai prendendo in giro, compila il form con la tua vera età';
}
