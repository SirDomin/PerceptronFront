let serverUrl = 'http://127.0.0.1:8000';

let grid = new Grid(document.getElementById('container'), 5, 7);

document.body.onload = () => {
    grid.fillGrid();
}

document.getElementById('clear_button').onclick = () => {
    grid.clearActive();
}

for (let x = 0; x < 10; x++) {
    let number = document.createElement('div');
    number.className = 'answer_element';
    number.setAttribute('id', `${x}`);
    number.innerHTML = `${x}`;

    document.getElementById('answers_container').append(number);
}

function fillAnswer(number) {
    [...document.getElementsByClassName('answer_element')].forEach(element => {
        element.classList.remove('active');
    })

    document.getElementById(`${number}`).classList.toggle('active');
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

function sendRequest(data) {
    postData(serverUrl, data)
        .then(data => {
            fillAnswer(data);
        })
}