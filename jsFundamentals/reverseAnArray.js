function reverseAnArray(n, numbers) {
    let res = [];
    
    for (let r = n - 1; r >= 0; r--) {
        res.push(numbers[r]);
    }
    console.log(res.join(" "));
}
reverseAnArray(3, [10, 20, 30, 40, 50]);
reverseAnArray(4, [-1, 20, 99, 5]);
