function readText(input){
    let index = 0;
    let command = input[index];
    index++;
    
    while(command !== "Stop") {
        console.log(command);
        index++;
    }
}
