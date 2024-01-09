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
const result = document.getElementById('result');



function numberRandom() {
    return Math.floor(Math.random() * 5 ) + 1;
}

function isEven(number) {
    return number % 2 === 0;
}



button.addEventListener('click', function(){
   let numberUser = parseInt(inputField.value);
    if(isNaN(numberUser) || numberUser < 1 || numberUser > 5){
        alert("i campi sono sbagliati, inserisci un numero da 1 a 5")
    }else{
        let numberPc = numberRandom();
        let sum = numberUser + numberPc;
        console.log(sum);
        console.log(isEven(sum));

        if(isEven(sum) === true){
            console.log('pari')
        }else if(isEven(sum) === false){
            console.log('dispari')
        };

        choiceUser = selectElement.options[selectElement.selectedIndex].value;
        let risultato = '';
        switch (choiceUser) {
            case "pari":
                risultato = isEven(sum) ? "hai vinto" : "hai perso";
                break;
            case "dispari":
                risultato = !isEven(sum) ? "hai vinto" : "hai perso";
                break;
            default:
                risultato = "Scegli pari o dispari.";
        };

        result.innerText = risultato;
    };
        
    
});