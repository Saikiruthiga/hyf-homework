// Flight booking fullname function
console.log("**********************");
console.log("Ex 1 : Flight booking fullname function");
console.log("**********************");

function getFullName(firstname, surname) {
  return firstname + " " + surname;
}
const fullName1 = getFullName("Javascript", "class");
const fullName2 = getFullName("React", "class");
console.log(`fullName1:${fullName1}\nfullName2:${fullName2}`);

//Formal fullname
console.log("**********************");
console.log("Ex 2: Formal fullname");
console.log("**********************");
function getFormalFullName(firstname, surname, useFormalName, gender) {
  if (!firstname || !surname) {
    return "Please provide your firstname and surname";
  } else if (!useFormalName) {
    return `${firstname} ${surname}`;
  } else if (useFormalName && gender === "male") {
    return `Lord ${firstname} ${surname}`;
  } else if (useFormalName && gender === "female") {
    return `Lady ${firstname} ${surname}`;
  } else {
    return "Please provide the gender";
  }
}

const formalFullName1 = getFormalFullName("Benjamin", "Hughes", true);
const formalFullName2 = getFormalFullName("Ida", "Jones");
console.log(
  `formalFullName1:${formalFullName1}\nformalFullName2:${formalFullName2}`
);

//Event application
console.log("**********************");
console.log("Ex 3: Event application");
console.log("**********************");

function getEventWeekday(daysAfter) {
  const today = new Date().getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekDays[(today + daysAfter) % 7];
}
const daysAfter = 4;
const eventDay = getEventWeekday(daysAfter);
console.log(eventDay);

//Weather wear
console.log("**********************");
console.log("Ex 4: Weather wear");
console.log("**********************");

function selectClothes(temperature) {
  if (temperature <= 5) {
    return "Winter Jacket and Thermal Wear";
  } else if (temperature < 18) {
    return "Normal Jacket and Pant and T-shirt";
  } else if (temperature >= 18) {
    return "Shorts and a T-shirt";
  } else {
    return "Please provide the current temperature in degrees";
  }
}
const temperature = 15;
const clothesToWear = selectClothes(temperature);
console.log(clothesToWear);

//Student manager
console.log("**********************");
console.log("Ex 5: Student manager");
console.log("**********************");
let class07Students = [];
function addStudentToClass(studentName) {
  studentName = studentName.toLowerCase();
  if (studentName === "") {
    console.log("Please provide the student name");
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (class07Students.length > 6 && studentName !== "mary elizabeth") {
    console.log("Cannot add more students to class 07");
  } else {
    class07Students.push(studentName);
  }
  return class07Students;
}
addStudentToClass("Benjamin");
addStudentToClass("Hughes");
addStudentToClass("Josefine");
addStudentToClass("Henrik");
addStudentToClass("Ida");
addStudentToClass("Frede");
addStudentToClass("Mary Elizabeth");
addStudentToClass("Hello");
addStudentToClass("benjamin");
addStudentToClass("");

console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(getNumberOfStudents());

//Candy helper optional
console.log("**********************");
console.log("Ex 6: Candy helper optional");
console.log("**********************");
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
  let price = 0;
  candyType = candyType.toLowerCase();
  if (candyType === "sweet") {
    price = weight * 0.5;
  } else if (candyType === "chocolate") {
    price = weight * 0.7;
  } else if (candyType === "toffee") {
    price = weight * 1.1;
  } else if (candyType === "chewing-gum") {
    price = weight * 0.03;
  } else {
    console.log(
      "Please select the candyType as Sweet or Chocolate or Toffee or Chewing-gum"
    );
  }
  boughtCandyPrices.push(price);
  return boughtCandyPrices;
}

addCandy("sweet", 15);
addCandy("sweet", 20);
addCandy("toffee", 20);
addCandy("chocolate", 15);
console.log(boughtCandyPrices);

const amountToSpend = Math.round(Math.random() * 100);
let amountSpent = 0;
function canBuyMoreCandy(boughtCandyPrices) {
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    amountSpent += boughtCandyPrices[i];
  }
  return amountToSpend > amountSpent;
  // using while loop
  /*let i = 0;
  while (i < boughtCandyPrices.length) {
    amountSpent += boughtCandyPrices[i];
    i++;
  }*/
}
const canBuy = canBuyMoreCandy(boughtCandyPrices);
if (canBuy) {
  console.log("Yes, You can buy more candy");
} else {
  console.log("Enough candy for you!");
}
console.log(`amountToSpend : ${amountToSpend}`);
console.log(`amountSpent : ${amountSpent}`);
