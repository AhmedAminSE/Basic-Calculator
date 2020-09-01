let temp = 0;
let opt = ' ';
let screen;
let gotResult = false;
let tempUsed = false;
function calculate() {
    if (opt == '+') {
        temp += parseInt(screen.innerHTML);
    }
    else if (opt == '-') {
        temp -= parseInt(screen.innerHTML);
    }
    else if (opt == '×') {
        temp *= parseInt(screen.innerHTML);
    }
    else {
        temp /= parseInt(screen.innerHTML);
    }
}
document.querySelector('.calc-buttons').addEventListener('click', function (event) {
    screen = document.querySelector('.screen');
    const buttonName = event.target.innerHTML;
    if (Number.isInteger(parseInt(buttonName))) {
        if (screen.innerHTML == 0 || gotResult) {
            screen.innerHTML = buttonName;
            gotResult = false;
            tempUsed = true;
        }
        else {
            screen.innerHTML += buttonName;
        }
    }
    else if (buttonName == '÷' || buttonName == '+'
        || buttonName == '×' || buttonName == '-') {
        if (opt == ' ' && tempUsed) {
            temp = parseInt(screen.innerHTML);
        }
        else {
            calculate();
        }
        if (tempUsed) {
            if (buttonName == '+') {
                opt = '+';
            }
            else if (buttonName == '-') {
                opt = '-';
            }
            else if (buttonName == '×') {
                opt = '×';
            }
            else {
                opt = '÷';
            }
        }
        screen.innerHTML = 0;
    }
    else if (buttonName == '=') {
        if (!gotResult) {
            calculate();
            screen.innerHTML = temp;
            opt = ' ';
            gotResult = true;
        }
    }
    else if (buttonName == 'C') {
        temp = 0;
        opt = ' ';
        screen.innerHTML = 0;
        tempUsed = false;
    }
    else {
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
        if (screen.innerHTML === '') {
            screen.innerHTML = 0;
        }
    }
})