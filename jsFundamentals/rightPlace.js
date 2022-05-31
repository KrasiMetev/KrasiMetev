function rightPlace(str1, char, str2) {
    let res = '';

    for (let i = 0; i < str1.length; i++) {
        let currentChar = str1[i];
        if (currentChar === "_") {
            res += char;
        } else {
            res += currentChar;
        }
    }
    if (res === str2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('')