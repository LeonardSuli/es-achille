
const div = document.querySelector('div');
const input = document.querySelector('input');
const scorri = document.querySelector('#scorri');
const ferma = document.querySelector('#ferma');

let timer;

// function scorrimento() {
scorri.addEventListener('click', () => {

    div.innerText = input.value;

    timer = setInterval(() => {

        const letteraIniziale = div.innerText.slice(0, 1);
        const restoParola = div.innerText.slice(1);
        console.log(restoParola + letteraIniziale)

        div.innerText = restoParola + letteraIniziale;

    }, 500);

})
// }

ferma.addEventListener('click', () => {

    clearInterval(timer);
});
