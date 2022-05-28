function catDiet(input) {
    const fat = 9;
    const protein = 4;
    const sugars = 4;

    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentSugars = Number(input[2]);
    let allCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let gramsFat = Number((percentFat/100 * allCalories)/fat);
    let gramsProtein = Number((percentProtein/100 * allCalories)/protein);
    let gramsSugars = Number((percentSugars/100 * allCalories)/sugars);

    let foodWeight = gramsFat + gramsProtein + gramsSugars;
    let caloriesForGramFood = allCalories / foodWeight;

    let percentFood = 100 - percentWater; 
    let calories = percentFood/100 * caloriesForGramFood;
    console.log((calories).toFixed(4));
}
catDiet(["60","25","15","2500","60"]) 