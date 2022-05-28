function worldSwimmingRecord(input) {
  const recordInSec = Number(input[0]);
  const distanceMeters = Number(input[1]);
  const timeInSecForOneMeter = Number(input[2]);

  let ivanTime = distanceMeters * timeInSecForOneMeter;

  const current = Math.floor(distanceMeters / 15);
  const delayAdded = current * 12.5;
  const totalTime = Number(ivanTime) + Number(delayAdded.toFixed(2));

  if (totalTime < recordInSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${Math.abs(recordInSec - totalTime).toFixed(
        2
      )} seconds slower.`
    );
  }
}
worldSwimmingRecord(["10464", "1500", "20"]);
