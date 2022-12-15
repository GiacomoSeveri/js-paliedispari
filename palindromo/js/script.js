

const textWord = document.getElementById('txt');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', function(){

    const currentWord = textWord.value.trim();

    if(!currentWord) {
        alert('Parola non valida');
        return;
    }

    function reverseWord(word) {
        let reverse = '';

        for(let i = word.length - 1; i >= 0; i--) {
            reverse += word[i];
        }
        return reverse;
    }
    
    const reversedWord = reverseWord(currentWord);
    console.log(reversedWord);

    if(currentWord === reversedWord) {
        result.innerText = `Si, la parola ${currentWord} è palindroma`;
    } else {
        result.innerText = `No, la parola ${currentWord} non è palindroma`;
    }
});
