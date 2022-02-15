function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinSring = pin + '';
    if (pinSring.length == 4) {
        return pin;
    }
    else {
        // console.log('3 disit pin', pin);
        return getPin();
    }
}


function genaratePin() {
    const pin = getPin()
    //input a knno kichu show korte caile .value use korte hoy
    document.getElementById('display-pin').value = pin;

    console.log(pin);
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;     //get input value
        const newNumber = previousNumber + number;  // add old and new
        calcInput.value = newNumber;                // set input a new number
    }

});


function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}