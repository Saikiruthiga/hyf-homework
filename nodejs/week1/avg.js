// Program for calculate the average of the numbers provided as command line arguments.

let total = 0;
let count = 0;
let average;
let num = [];

for (let i = 2; i < process.argv.length; i++) {
  let value = Number(process.argv[i]);

  if (isNaN(value)) {
    console.log("The arguments should be a number");
    return;
  } else {
    num.push(value);
  }
}
for (let i = 0; i < num.length; i++) {
  total += num[i];
  count++;
}

if (count > 0) {
  average = total / count;
  console.log(`The average is ${average} `);
} else {
  console.log("please provide some arguments in numbers");
}
