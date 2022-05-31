function toyShop(input) {
  const puzzlePrice = 2.6;
  const talkingDollPrice = 3;
  const teddyBearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2;

  const travelPrice = Number(input[0]);
  const puzzles = Number(input[1]);
  const talkingDolls = Number(input[2]);
  const teddyBears = Number(input[3]);
  const minions = Number(input[4]);
  const trucks = Number(input[5]);
  let totalPrice =
    puzzles * puzzlePrice +
    talkingDolls * talkingDollPrice +
    teddyBears * teddyBearPrice +
    minions * minionPrice +
    trucks * truckPrice;

  if (puzzles + talkingDolls + teddyBears + 
    minions + trucks >= 50) {
    totalPrice = totalPrice - totalPrice * 0.25;
  }

  let wonMoney = totalPrice - totalPrice * 0.1;
  //let moneyLeft = wonMoney - travelPrice;
  let moneyNeeded = Math.abs(travelPrice - wonMoney);

  if (wonMoney - travelPrice >=0) {
    console.log(`Yes! ${moneyNeeded.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
