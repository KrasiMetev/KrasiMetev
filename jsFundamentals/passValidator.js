function passValidator(input) {

    let passLength = false;
    let lettersAndDigits = /^[0-9a-zA-Z]+$/;
    let twoDigits = false;
    let lettersDigits = false;

    if (input.length >= 6 && input.length <= 10) {
        passLength = true;
    } else {
        console.log("Password must be between 6 and 10 characters");
    }

    if (input.match(lettersAndDigits)) {
        lettersDigits = true;
    } else {
        console.log("Password must consist only of letters and digits");
    }

    if (input.replace(/[^0-9]/g, '').length >= 2) {
        twoDigits = true;
    } else {
        console.log("Password must have at least 2 digits");
    }
    
    if (passLength && twoDigits && lettersDigits) {
        console.log('Password is valid');
    }
}
passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');

