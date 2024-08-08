// Program for calculate the average of the numbers provided as command line arguments.

const num = process.argv.slice(2).map(Number);

if (num.some(isNaN)) {
  console.log("The arguments should be a number");
  return;
}
if (num.length > 0) {
  const total = num.reduce((acc, curr) => acc + curr, 0);
  const average = total / num.length;
  console.log(`The average is ${average}`);
} else {
  console.log("Please provide some arguments in numbers");
}
