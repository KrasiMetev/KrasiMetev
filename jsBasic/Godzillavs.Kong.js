function godzillaVsKong(input) {
  const filmBuget = Number(input[0]);
  const statists = Number(input[1]);
  let dressPrice = Number(input[2]);
  let decor = filmBuget * 0.1;
  let totalStatistsPrice = statists * dressPrice;

  if (statists > 150) {
    totalStatistsPrice = totalStatistsPrice * 0.9;
  }

  let totalPrice = totalStatistsPrice + decor;

  if (decor + totalStatistsPrice > filmBuget) {
    console.log(`Not enough money!`);
    console.log(
      `Wingard needs ${Math.abs(filmBuget - totalPrice).toFixed(
        2
      )} leva more.`
    );
  } else if (decor + totalStatistsPrice <= filmBuget) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${Math.abs(
        filmBuget - totalPrice
      ).toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["20000", "120", "55.5"]);
