let userName = "";
const listArr = [];
const str1 = "hello my name is benjamin";
const str2 = "what is my name";
const str3 = "add fishing to my todo";
const str4 = "add singing in the shower to my todo";
const str5 = "remove fishing from my todo";
const str6 = "what is on my todo";
const str7 = "what day is it today";
const str8 = "what is 3 / 3";
const str9 = "set timer for 4 seconds";
const str10 = "how will the day be for me";

function getReply(command) {
  let result = "";
  if (command.includes(str1)) {
    userName = saveName(command);
    result = `nice to meet you ${userName}`;
  } else if (command.startsWith(str2)) {
    if (userName) {
      result = `return your name is ${userName}`;
    } else {
      result = `You have not tell your name yet`;
    }
  } else if (command.includes("add")) {
    const activity = addActivity(command);
    result = `${activity} added to your todo`;
  } else if (command.includes("remove")) {
    result = removeActivity(command);
  } else if (command.includes(str6)) {
    return `You have ${listArr.length} todos - ${listArr.join(" , ")}`;
  } else if (command.includes(str7)) {
    result = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } else if (command.includes(str8)) {
    return calcOperations(command);
  } else if (command.includes(str9)) {
    setTimeout(timer, 4000);
    result = "Timer set for 4 seconds";
  } else if (command.includes(str10)) {
    result = guessAboutToday();
  } else {
    result = "error";
  }
  return result;
}
function saveName(string) {
  const stringArray = string.split(" ");
  const userName = stringArray[stringArray.length - 1];
  return userName;
}
function addActivity(string) {
  const startIndex = string.indexOf("add") + 4;
  const endIndex = string.indexOf("to my");
  const activity = string.substring(startIndex, endIndex).trim();
  listArr.push(activity);
  return activity;
}

function removeActivity(string) {
  const startIndex = string.indexOf("remove") + 7;
  const endIndex = string.indexOf("from my");
  const activity = string.substring(startIndex, endIndex).trim();
  if (listArr.includes(activity)) {
    const index = listArr.indexOf(activity);
    listArr.splice(index, 1);
    return `Removed ${activity} from your todo`;
  } else {
    return `Sorry, I couldn't find ${activity} in your todo`;
  }
}
function calcOperations(string) {
  let output;
  const stringArray = string.split(" ");
  const number1 = Number(stringArray[2]);
  const number2 = Number(stringArray[4]);
  const operation = stringArray[3];
  if (operation.includes("+")) {
    output = number1 + number2;
  } else if (operation.includes("-")) {
    output = number1 - number2;
  } else if (operation.includes("*")) {
    output = number1 * number2;
  } else if (operation.includes("/")) {
    output = number1 / number2;
  } else {
    output = "Please give proper input";
  }
  return output.toString();
}
function timer() {
  console.log("Timer Done");
}
function guessAboutToday() {
  let todayLuck = "";
  const words = {
    positiveWords: ["great", "awesome", "lucky"],
    negativeWords: ["challenging", "less fortunate", "not as expected"],
  };
  const combinedArray = words.positiveWords.concat(words.negativeWords);
  let randomWord =
    combinedArray[Math.floor(Math.random() * combinedArray.length)];

  if (words.positiveWords.includes(randomWord)) {
    todayLuck += `Wow!, This day will be a ${randomWord} day for you!! Enjoy!!!`;
  } else {
    todayLuck += `This day will be ${randomWord} for you, but remember every challenge brings opportunity. Stay positive and keep moving forward!`;
  }

  return todayLuck;
}

console.log(getReply(str1));
console.log(getReply(str2));
console.log(getReply(str3));
console.log(getReply(str4));
console.log(getReply(str5));
console.log(getReply(str6));
console.log(getReply(str7));
console.log(getReply(str8));
console.log(getReply(str9));
console.log(getReply(str10));
