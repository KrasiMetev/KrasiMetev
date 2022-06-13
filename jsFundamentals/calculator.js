function calculator(num1, str, num2) {

    let result = 0;

    switch (str) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
    }

    console.log(result.toFixed(2));
    
}
calculator(5, "+", 18)
