console.log('JS OK')

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in console.


// scaletta
// prendere gli elemnti interessati
// 1 - chiedere all'utente pari o dispari e un numero da 1 a 5
// 2 - creare la funzione per creare un numero random da 1 a 5
    // a - come la chiamo?
    // b - mi servono parametri?
    // c - devo restituire qualcosa?
    // d - se si, di che tipo?
// 3 - sommare numero utente e numero pc
// 4 - creare la funzione per stabilire pari o dispari 
    // a - come la chiamo?
    // b - mi servono parametri?
    // c - devo restituire qualcosa?
    // d - se si, di che tipo?
// 5 - stampiamo in console(bonus in pagina)


const selectElement = document.getElementById('select');
const inputField = document.getElementById('usernumber');
const button = document.getElementById('button');




function numberRandom(min = 1, max = 5) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




button.addEventListener('click', function(){
    const numberPc = numberRandom();
    const numberUser = inputField.value;
    let sum = 0;
    sum = numberPc + numberUser;
    console.log(sum)

});