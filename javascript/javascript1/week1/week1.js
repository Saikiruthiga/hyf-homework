//Age-ify (A future age calculator)
console.log("********** Age-ify (A future age calculator) *************");
const yearOfBirth = 1991;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
console.log(
  "******************* Goodboy-Oldboy (A dog age calculator) **********"
);
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears) {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7;
} else {
  dogYear = dogYearFuture - dogYearOfBirth;
}
let yearType;
if (shouldShowResultInDogYears) {
  yearType = "dog";
} else {
  yearType = "human";
}

console.log(
  "Your dog will be " +
    dogYear +
    " " +
    yearType +
    " years old in " +
    dogYearFuture
);

//Housey pricey (A house price estimator)
console.log("********** Housey pricey (A house price estimator) *********");
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterGardenSize = 100;
const peterPaidAmount = 2500000;
const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSize = 70;
const juliaPaidAmount = 1000000;
const peterVolumeInMeters =
  peterHouseWidth * peterHouseDepth * peterHouseHeight;

const juliaVolumeInMeters =
  juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;

const peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;
const juliaHousePrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;

if (peterHousePrice > peterPaidAmount) {
  console.log("Peter, You bought this house for a cheaper price");
} else if (peterHousePrice === peterPaidAmount) {
  console.log("Peter, You bought this house for correct price");
} else {
  console.log("Peter, You bought this house for higher price");
}
if (juliaHousePrice > juliaPaidAmount) {
  console.log("Julia, You bought this house for a cheaper price");
} else if (juliaHousePrice === juliaPaidAmount) {
  console.log("Julia, You bought this house for correct price");
} else {
  console.log("Julia, You bought this house for higher price");
}

//Ez Namey (Startup name generator) Optional
console.log(
  "************ Ez Namey (Startup name generator) Optional *****************"
);
const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "NextGen",
  "Innovative",
  "Creative",
  "CodeCraft",
  "Hackers",
  "Digital",
  "IT",
];
const secondWords = [
  "Solutions",
  "World",
  "Themes",
  "Hands",
  "Providers",
  "Services",
  "Group",
  "Waves",
  "Ground",
  "Players",
];
const firstName = firstWords[Math.floor(Math.random() * 10)];
const secondName = secondWords[Math.floor(Math.random() * 10)];
const startupName = firstName + " " + secondName;
const nameLength = startupName.length;
console.log(`The startup: "${startupName}" contains ${nameLength} characters`);
