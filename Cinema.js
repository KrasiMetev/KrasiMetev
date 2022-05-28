function cinema(input) {
    const projectionType = input[0];
    const r = Number(input[1]);
    const c = Number(input[2]);
    let cost = 0;
  
    switch (projectionType) {
      case "Premiere":
          cost = 12 * r * c;
        break;
      case "Normal":
          cost = 7.5 * r * c;
        break;
      case "Discount":
          cost = 5 * r * c;
        break;
    }
    console.log(`${cost.toFixed(2)} leva`);
  }
  cinema(["Premiere", "10", "12"]);