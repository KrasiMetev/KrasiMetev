function equalSum(array) {

    let  foundIndex = 'no';
    let arrayL = array.length;

   for (let i = 0; i < arrayL; i++) {

    let leftSum = 0;
    let rightSum = 0;

    for(let l = 0; l < i; l++) {
        leftSum += array[l];
    }
    for(let r = i + 1; r < arrayL; r++) {
        rightSum += array[r];
    }

    if(leftSum === rightSum) {
        foundIndex = i;
    }
   }
   console.log(foundIndex);
}
equalSum([1, 2, 3, 3]);