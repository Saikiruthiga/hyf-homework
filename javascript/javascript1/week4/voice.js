function getReply(command) {
  if (command === str1) {
    const userName = saveName(str1);
    return `Nice to meet you ${userName}`;
  } else if (command === str2) {
    if (!str1) {
      return `you have not tell your name yet`;
    }
    const yourName = saveName(str1);
    return `Your name is ${yourName}`;
  } else if (command === str3) {
    return addActivity(str3);
  } else if (command === str4) {
    return addActivity(str4);
  } else if (command === str5) {
    return removeActivity(str5);
  } else if (command === str6) {
    return `You have ${todo.length} todos - ${todo.join(" , ")}`;
  } else if (command === str7) {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } else if (command === str8) {
    return calcOperations(str8);
  } else if (command === str9) {
    setTimeout(timer, 4000);
    return "Timer set for 4 seconds";
  } else if (command === str10) {
    return guessAboutToday(str10);
  } else {
    return "error";
  }
}
function saveName(string) {
  stringArray = string.split(" ");
  const userName = stringArray[stringArray.length - 1];
  return userName;
}
function addActivity(string) {
  const startIndex = string.indexOf("add") + 4;
  const endIndex = string.indexOf("to my todo");
  const activity = string.substring(startIndex, endIndex).trim();
  todo.push(activity);
  return `${activity} added to your todo`;
}
function removeActivity(string) {
  const startIndex = string.indexOf("remove") + 7;
  const endIndex = string.indexOf("from my todo");
  const activity = string.substring(startIndex, endIndex).trim();
  const index = todo.indexOf(activity);
  todo.splice(index, 1);
  return `Removed ${activity} from your todo`;
}
function calcOperations(string) {
  stringArray = string.split(" ");
  const number1 = Number(stringArray[2]);
  const number2 = Number(stringArray[4]);
  const operation = stringArray[3];

  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Please give proper input";
  }
}
function timer() {
  console.log("Timer Done");
}
function guessAboutToday(string) {
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

//let str1; // used when the person not mentioned name yet
let todo = [];
const str1 = "Hello my name is Benjamin Benjamin";
const str2 = "What is my name?";
const str3 = "Add fishing to my todo";
const str4 = "Add singing in the shower to my todo";
const str5 = "Remove fishing from my todo";
const str6 = "What is on my todo?";
const str7 = "What day is it today?";
const str8 = "what is 4 * 12";
const str9 = "Set a timer for 4 seconds";
const str10 = "How will the day be for me?";

console.log(getReply(str1));
console.log(getReply(str2));
console.log(getReply(str3));
console.log(todo);
console.log(getReply(str4));
console.log(todo);
console.log(getReply(str5));
console.log(todo);
console.log(getReply(str6));
console.log(getReply(str7));
console.log(getReply(str8));
console.log(getReply(str9));
console.log(getReply(str10));
