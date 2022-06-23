function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numberAsStr = number.toString();

    for(let char of numberAsStr) {
        let currentNumber = Number(char)
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}