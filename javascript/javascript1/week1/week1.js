//Age-ify (A future age calculator)
console.log("********** Age-ify (A future age calculator) *************");
const yearOfBirth = 1991;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
console.log("******************* Goodboy-Oldboy (A dog age calculator) **********");
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear;
const shouldShowResultInDogYears = false;
if(shouldShowResultInDogYears){
    dogYear = (dogYearFuture - dogYearOfBirth) * 7;
    console.log("Your dog will be "+ dogYear + " dog years old in " +dogYearFuture);
}
else{
    dogYear = (dogYearFuture - dogYearOfBirth);
    console.log("Your dog will be "+ dogYear + " human years old in " +dogYearFuture);
}


//Housey pricey (A house price estimator)
console.log("********** Housey pricey (A house price estimator) *********");
const peterHouseDetails = [8,10,10,100, 2500000];
const juliaHouseDetails = [5,11,8,70,1000000]
const peterVolumeInMeters = peterHouseDetails[0]*peterHouseDetails[1]*peterHouseDetails[2];
const juliaVolumeInMeters = juliaHouseDetails[0]*juliaHouseDetails[1]*juliaHouseDetails[2];

const peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterHouseDetails[3] * 300;
const juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaHouseDetails[3] * 300;

if (peterHousePrice>peterHouseDetails[4]){
    console.log("Peter, You bought this house for a cheaper price");
}
else if(peterHousePrice===peterHouseDetails[4]){
    console.log("Peter, You bought this house for correct price");
}
else{
    console.log("Peter, You bought this house for higher price");
}
if (juliaHousePrice>juliaHouseDetails[4]){
    console.log("Julia, You bought this house for a cheaper price");
}
else if(juliaHousePrice===juliaHouseDetails[4]){
    console.log("Julia, You bought this house for correct price");
}
else{
    console.log("Julia, You bought this house for higher price");
}

//Ez Namey (Startup name generator) Optional
console.log("************ Ez Namey (Startup name generator) Optional *****************");
const firstWords = ["Easy", "Awesome", "Corporate", "NextGen", "Innovative", "Creative", "CodeCraft", "Hackers", "Digital", "IT" ];
const secondWords = ["Solutions", "World", "Themes", "Hands", "Providers", "Services", "Group", "Waves", "Ground", "Players"];
const firstName = firstWords[Math.floor(Math.random() * 10)];
const secondName = secondWords[Math.floor(Math.random() * 10)];
const startupName = firstName + " " + secondName;
const nameLength = startupName.length;
console.log('The startup: "' + startupName + '" contains '+ nameLength + ' characters');







