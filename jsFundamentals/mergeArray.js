function mergeArray(firstArr, secondArr) {
    
    let thirdArr = [];
    let inputL = firstArr.length;
    for(let i = 0; i < inputL; i++) {
        if(i % 2 === 0) {
            thirdArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            thirdArr[i] = firstArr[i] + secondArr[i];
        }
    }
    console.log(thirdArr.join(" - "));
}
mergeArray(['5', '15', '23', '56', '35'],
           ['17', '22', '87', '36', '11'])