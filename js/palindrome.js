console.log('JS OK')

// Palidroma
// Chiedere all’utente di inserire una parola (con un prompt)
// Creare una funzione per capire se la parola inserita è palindroma
// Stampiamo il risultato in console


function isPalindrome(word){
    word = word.toLowerCase();
    let inverseWord = '';

    for(let i = word.length - 1; i >= 0; i--)
    inverseWord += word[i];

    return inverseWord === word;
   
    
};


// scaletta
// 1 - chiedere all'utente la parola
// 2 - creare la funzione
    // a - come la chiamo?
    // b - mi servono parametri?
    // c - devo restituire qualcosa?
    // d - se si, di che tipo?
// 3 - stampare il risultato in colsole

const inputField = document.getElementById('text');
const button = document.getElementById('button');
const resultElement = document.getElementById('result');

button.addEventListener('click', function(){
    const word = inputField.value;
    resultElement.innerText = (isPalindrome(word))
});




    

