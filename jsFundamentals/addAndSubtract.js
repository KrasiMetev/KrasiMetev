function main(a,b,c) {
    let sumAAndB = sum(a,b);

    let finalResult = substract(sumAAndB, c);
    console.log(finalResult);

    function sum(a,b) {
        return a + b;
    } 

    function substract(res,c) {
        return sumAAndB - c;

    }
}
main(23,6,10)