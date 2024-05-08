//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
function removeTheName(name) {
  return name !== nameToRemove;
}
const newArray = names.filter(removeTheName);
console.log(newArray);

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calcTravelTime(travelInfo) {
  const time = travelInfo["destinationDistance"] / travelInfo["speed"];
  const hours = time;
  let minutes = (time - hours) * 60;
  minutes = Math.round(minutes);
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = calcTravelTime(travelInformation);
console.log(travelTime);

//Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
function logOutSeriesText(arrayofobjects) {
  let totalTime = 0;
  for (let i = 0; i < arrayofobjects.length; i++) {
    let time =
      arrayofobjects[i]["days"] * 24 * 60 +
      arrayofobjects[i]["hours"] * 60 +
      arrayofobjects[i]["minutes"];
    time = ((time / (80 * 365 * 24 * 60)) * 100).toFixed(3);
    totalTime += parseFloat(time);
    console.log(`${arrayofobjects[i]["title"]} took ${time}% of my life`);
  }
  return `In total that is ${totalTime}% of my life`;
}
const seriesTime = logOutSeriesText(seriesDurations);
console.log(seriesTime);
