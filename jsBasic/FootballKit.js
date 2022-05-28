function footbalKit(input) {
  const tShirtPrice = Number(input[0]);
  const sumToWinBall = Number(input[1]);

  const shortsPrice = 75/100 * tShirtPrice;
  const socksPrice = 20/100 * shortsPrice;
  const shoesPrice = 2*(tShirtPrice + shortsPrice);

  let priceTotal = tShirtPrice + shortsPrice + socksPrice + shoesPrice;
  let finalSum = priceTotal - 0.15*priceTotal;

  let notEnoughMoney = sumToWinBall - finalSum;

  if (finalSum >= sumToWinBall) {
      console.log(`Yes, he will earn the world-cup replica ball!`);
      console.log(`His sum is ${finalSum.toFixed(2)} lv.`);
  } else {
      console.log(`No, he will not earn the world-cup replica ball.`);
      console.log(`He needs ${notEnoughMoney.toFixed(2)} lv. more.`);
  }
}
footbalKit(["55", "310"]);
