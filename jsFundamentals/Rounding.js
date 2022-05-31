function rounding(num1, precision) {
    if(precision > 15) {
        precision = 15;
    }
    let roundedNum = num1.toFixed(precision);
    console.log(parseFloat(roundedNum));
}