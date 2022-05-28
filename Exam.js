function exam(input) {
  let index = 0;
  let numberOfStudents = Number(input[0]);
  let numberOfFailedStudents = 0;
  let numberOfAverageStudents = 0;
  let numberOfGoodStudents = 0;
  let numberOfExcellentStudents = 0;
  let totalResult = 0;

  for (let i = 1; i <= numberOfStudents; i++) {
    let grade = Number(input[i]);
    totalResult += grade;
    if (grade < 3) {
      numberOfFailedStudents++;
    } else if (grade <= 3.99 && grade >= 3) {
      numberOfAverageStudents++;
    } else if (grade <= 4.99 && grade >= 4) {
      numberOfGoodStudents++;
    } else {
      numberOfExcellentStudents++;
    } 
}
let percentExcellent = (numberOfExcellentStudents * 100) / numberOfStudents;
let percentGood = (numberOfGoodStudents * 100) / numberOfStudents;
let percentAverage = (numberOfAverageStudents *100) / numberOfStudents;
let percentFailed = (numberOfFailedStudents *100) / numberOfStudents;
let averageGrade = totalResult / numberOfStudents;

console.log(`Top students: ${percentExcellent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${percentGood.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${percentAverage.toFixed(2)}%`);
console.log(`Fail: ${percentFailed.toFixed(2)}%`);
console.log(`Average: ${averageGrade.toFixed(2)}`);
}
exam([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);
