function printAndSum(startNumber, endNumber) {

    let sum = 0;
    let printLine = '';

    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        sum+=currentNumber;

        if(currentNumber === endNumber) {
            printLine += `${currentNumber}` ; 
        } else {
            printLine += `${currentNumber} `;
        }

    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
printAndSum(1, 100)