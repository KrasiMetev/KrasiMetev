    function sumAndProduct(input) {
        let nNumber = Number(input);
        let numberReach = 0;
        let count = 0;

        for (let a = 1; a<=9; a++) {
            for (let b = 9; b <= a; b++) {
                for (let c = 0; c<=9; c++) {
                    for (let d = 9; d<=c; d++) {
                        let numSum = a + b + c + d;
                        let numMult = a * b * c * d;
                        console.log(numSum);
                        console.log(Math.round(numMult/numSum));
                        if (numSum == numMult && nNumber % 10 == 5) {
                            count += 1;
                            console.log(`${a}${b}${c}${d}`);
                            numberReach = true;
                        } else if (Math.round(numMult / numSum) == 3 && nNumber % 3 ==0) {
                            count +=1;
                            console.log(`${d}${c}${b}${a}`);
                            numberReach = true;
                        }
                    } 
                    if (numberReach) {
                        break;
                    }
                }
                if (numberReach) {
                    break;
                }
            }
            if (numberReach) {
                break;
            }
        }
        if (count == 0) {
            console.log(`Nothing found`);
        }
    }
sumAndProduct(["123"]);