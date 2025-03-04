let button = document.querySelector('button');
let container = document.querySelector('.container');
let output = document.querySelector('.output');

container.style.display = 'none';


button.addEventListener('click', () => {

    // compare il contenitore
    container.style.display = 'flex';

    // i box resettano ogni volta che fai click e non raddoppiano
    container.innerHTML = '';

    for (let i = 1; i < 101; i++) {
        // console.log(i)

        let numRandom = Math.ceil(Math.random() * 10);

        container.innerHTML += `<div class="output">${numRandom}</div>`;

    }

})