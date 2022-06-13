function dayOfWeek(n) {
    if (n < 1 || n > 7) {
        console.log("Invalid day!");
    } else {
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" , "Sunday"];
    console.log(daysOfWeek[n-1]);
    }
}