
const button = document.querySelector('button');
const div = document.querySelector('div');
const input = document.querySelector('input');

///----- Con addEventListener -----///

// input.addEventListener('keyup', () => {

//     div.innerText = input.value
// })



///----- Con la funzione -----///

function myFunction() {

    div.innerText = input.value

}

button.addEventListener('click', () => {

    div.innerText = div.innerText.split('').reverse().join('')
})