function magicSum(array, number) {

    let arrOfValid = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] + array[i] === number) {
                validPair = `${array[i]} ${array[j]}`;
                arrOfValid.push(validPair);
            }
        }        
    }
    console.log(arrOfValid.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23], 8);