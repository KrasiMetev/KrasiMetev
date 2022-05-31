function excursionCalculator(input) {
  let numberOfPeople = Number(input[0]);
  let season = input[1];

  if (numberOfPeople <= 5) {
    switch (season) {
      case "spring":
        console.log(`${(numberOfPeople * 50).toFixed(2)} leva.`); break;
      case "summer":
        console.log(
          `${
            ((numberOfPeople * 48.5) -
            0.15 * (numberOfPeople * 48.5)).toFixed(2)
          } leva`
        ); break;
      case "autumn":
        console.log(`${(numberOfPeople * 60).toFixed(2)} leva.`); break;
      case "winter":
        console.log(`${((numberOfPeople * 86) + 0.08*(numberOfPeople * 86)).toFixed(2)} leva.`); break;
    }
  } else {
      switch (season) {
        case "spring":
            console.log(`${(numberOfPeople * 48).toFixed(2)} leva.`); break;
          case "summer":
            console.log(
              `${
               ((numberOfPeople * 45) -
                0.15 * (numberOfPeople * 45)).toFixed(2)
              } leva.`
            ); break;
          case "autumn":
            console.log(`${(numberOfPeople * 49.5).toFixed(2)} leva.`); break;
          case "winter":
            console.log(`${((numberOfPeople * 85) + 0.08*(numberOfPeople * 85)).toFixed(2)} leva.`); break;
      }
  }
}
excursionCalculator(["5", "spring"]);
