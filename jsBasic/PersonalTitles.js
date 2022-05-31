function personalTitle(input) {
    const age = Number(input[0]);
    const sex = input[1];

    if (age >= 16) {
        if (sex === "m") {
            console.log("Mr.");
        } else {
        console.log("Ms.");
        }
    } else {
        if (sex === "m" ) {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    }
}
personalTitle(["15", "f"]);