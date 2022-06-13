function reverseInPlace(array) {
    let k = array.length - 1;
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[k - i];
        array[k - i] = temp;
        }
        console.log(array.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])