function arrayRotation(arr1, rotations) {

    while (rotations > 0) {
        let elementToMove = arr1.shift();
        arr1.push(elementToMove);
        rotations--;
    }

    console.log(arr1.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)