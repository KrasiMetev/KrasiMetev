function multiplicationTable(input) {
    let arg = Number(input[0]);

    for(i = 1; i<=10; i++) {
        if (arg>=1 && arg<=10) {
            console.log(`${i} * ${arg} = ${i*arg}`);
        }
    }
    
}
multiplicationTable(["5"]);