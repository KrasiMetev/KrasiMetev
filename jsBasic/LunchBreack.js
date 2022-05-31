function lunchBreak(input) {
  const seriesName = input[0];
  const episodeDuration = Number(input[1]);
  const breakDuration = Number(input[2]);

  let lunchTime = (1 / 8) * breakDuration;
  let restTime = (1 / 4) * breakDuration;
  let totalTimeForSeriesLeft = Math.abs(breakDuration - lunchTime - restTime);

  if (totalTimeForSeriesLeft >= episodeDuration) {
    console.log(
      `You have enough time to watch ${seriesName} and left with ${Math.ceil(
        totalTimeForSeriesLeft - episodeDuration)
      } minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${seriesName}, you need ${Math.ceil(Math.abs(
        totalTimeForSeriesLeft - episodeDuration))
      } more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
