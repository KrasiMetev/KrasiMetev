function intAndFloat(numA, numB, numC) {
    let res = numA + numB + numC;
 
    console.log(`${res} - ${parseInt(res) === res ? 'Integer' : 'Float'}`);
}
intAndFloat(9,100, 1.1)