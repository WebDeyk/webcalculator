let text = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Walang ganyan gaga ka";
    }
}