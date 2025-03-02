let button = document.querySelector('button');
let div = document.querySelector('div');
let output = document.querySelector('.output');

div.style.display = 'none';

button.addEventListener('click', () => {

    // compare il contenitore
    div.style.display = 'block';

    // i box resettano ogni volta che fai click
    output.innerText = '';

    // aggiunge una classe con dello stile
    output.classList.add('nuova')

    // aggiunge un numero random
    output.innerText += Math.ceil(Math.random() * 10);

})