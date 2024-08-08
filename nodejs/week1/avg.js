// Program for calculate the average of the numbers provided as command line arguments.

let total = 0;
let count = 0;
let average;

for (let i = 2; i < process.argv.length; i++) {
  let num = Number(process.argv[i]);
  if (isNaN(num)) {
    console.log(`All the arguments should be a number`);
    return;
  } else {
    total += num;
    count++;
  }
}
if (count > 0) {
  average = total / count;
  console.log(`The average is ${average}`);
} else {
  console.log("Please provide some numbers");
}
