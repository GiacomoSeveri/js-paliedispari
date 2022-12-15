const oddEven = document.getElementById('squad');
const number = document.getElementById('number');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', function(){

    const currentNumb = parseInt(number.value);

    const oddEvenValue = oddEven.value;

    if(isNaN(currentNumb)) {
        alert('Questo non è un numero');
        return;
    }

    let resultSum = 0;

    random = Math.floor(Math.random() * 5) + 1;
    console.log(random);

    resultSum = currentNumb + random;
    console.log(resultSum);

    if(oddEvenValue === 'odd' && resultSum % 2 === 0) {
        result.innerText = `è uscito ${resultSum} hai perso! Torna dalla mamma`;
    } 
    else if(oddEvenValue === 'even' && resultSum % 2 === 0) {
        result.innerText = `è uscito ${resultSum} hai vinto!`;
    } 
    else if(oddEvenValue === 'even' && !(resultSum % 2 === 0)) {
        result.innerText = `è uscito ${resultSum} hai perso! Torna dalla mamma`;
    }
    else if(oddEvenValue === 'odd' && !(resultSum % 2 === 0)) {
        result.innerText = `è uscito ${resultSum} hai vinto!`;
    }
})
