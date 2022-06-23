function factorialDivision(num1, num2) {

    let answer = 1;
    let answer1 = 1;

    if (num1 == 0 || num1 == 1) {
        return answer;
    } else {
        for (let i = num1; i >= 1; i--) {
            answer = answer * i;
        }
    }

    if (num2 == 0 || num2 == 1) {
        return answer1;
    } else {
        for (let i = num2; i >= 1; i--) {
            answer1 = answer1 * i;
        }
    }
    let answer3 = (answer / answer1).toFixed(2); 
    console.log(answer3);
}
factorialDivision(6, 2)