
const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () => {
    const val = document.querySelector('input').value;

    div.innerHTML = '';

    for (let i = 1; i < 11; i++) {

        let ris = val * i;

        div.innerHTML += `${val} x ${i} = ${ris} </br>`;
    }


})
