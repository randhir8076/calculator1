function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteChar() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}

function appendToDisplay(char) {
    document.getElementById('display').innerText += char;
}

function calculate() {
    let display = document.getElementById('display').innerText;
    try {
        document.getElementById('display').innerText = eval(display);
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
