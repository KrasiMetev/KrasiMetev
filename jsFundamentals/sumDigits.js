function sumDigits(input) {

    let numberAsStr = input.toString();
    let sumOfAllDigits = 0;

    for(let i = 0; i < numberAsStr.length; i++) {
        let currentNum = Number(numberAsStr[i]);
        sumOfAllDigits += currentNum;
    }

    console.log(sumOfAllDigits);

}
sumDigits(245678);