let button = document.querySelector('button');
let container = document.querySelector('.container');
let output = document.querySelector('.output');

container.style.display = 'none';

button.addEventListener('click', () => {


    // compare il contenitore
    container.style.display = 'flex';


    for (let i = 1; i < 11; i++) {
        console.log(i)

        let numRandom = Math.ceil(Math.random() * 10);

        container.innerHTML += `<div class="output">${numRandom}</div>`;

    }

    // i box resettano ogni volta che fai click
    // output.innerHTML = '';

    // // aggiunge un numero random
    // output.innerText += Math.ceil(Math.random() * 10);

})