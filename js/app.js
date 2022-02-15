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