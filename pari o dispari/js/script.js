const oddEven = document.getElementById('squad');
const number = document.getElementById('number');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', function(){

    const currentNumb = number.value;

    if(isNaN(currentNumb)) {
        alert('Questo non è un numero');
        return;
    }

    let resultSum = 0;

    random = Math.floor(Math.random() * 5) + 1;
    console.log(random);

    resultSum = currentNumb + random;
    console.log(resultSum);

})
