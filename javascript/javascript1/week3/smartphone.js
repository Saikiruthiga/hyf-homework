//CactusIO-interactive (Smart phone usage app) optional
//Adding an activity
const activities = [];
function addActivity(date, activity, duration) {
  let obj = {};
  obj["date"] = date;
  obj["activity"] = activity;
  obj["duration"] = duration;
  activities.push(obj);
  return activities;
}

addActivity("05/07/2024", "LinkedIn", 20);
addActivity("05/07/2024", "Slack", 20);
addActivity("05/07/2024", "Whatsapp", 20);
console.log(activities);

//Show my status
function showStatus(activities) {
  let numberOfActivities = 0;
  let totalUsage = 0;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    for (let i = 0; i < activities.length; i++) {
      numberOfActivities += 1;
      totalUsage += activities[i]["duration"];
    }
    console.log(
      `You have added ${numberOfActivities} activities. They amount to ${totalUsage} min of usage`
    );
  }
  return { totalUsage };
}

//Usage limit
function checkUsage(showStatus) {
  const limit = 120;
  const { totalUsage } = showStatus(activities);
  if (totalUsage >= limit) {
    return "You have reached your limit, no more smartphoning for you!";
  } else {
    return "Yes, You can use your phone";
  }
}
const usage = checkUsage(showStatus);
console.log(usage);

//Extra feature (improve the addActivity, so that we dont need to specify the date)
let improvedActivities = [];
function addActivityWithAutoDate(activity, duration) {
  let obj = {};
  obj["date"] = new Date().toLocaleDateString("en-US");
  obj["activity"] = activity;
  obj["duration"] = duration;
  improvedActivities.push(obj);
  return improvedActivities;
}
addActivityWithAutoDate("Youtube", 20);
addActivityWithAutoDate("Facebook", 40);
console.log(improvedActivities);
//Extra feature (Improve showStatus() by only showing the number of actitivies for that specific day)

function showStatusOnDate(activities) {
  const date = "05/07/2024";
  let numberOfActivities = 0;
  for (let i = 0; i < activities.length; i++) {
    if (activities[i]["date"] === date) {
      numberOfActivities += 1;
    }
  }
  if (numberOfActivities >= 1) {
    return `For the date ${date} your activies on phone : ${numberOfActivities}`;
  } else {
    return `No such date available in activities`;
  }
}

const statusForDate = showStatusOnDate(activities);
console.log(statusForDate);
// Extra feature (function for calculating the activity a user has spent the most time on)
function calcMostUsedApp(activities) {
  let timeSpent = 0;
  let activity = "";
  let equalTimeSpent = true;
  for (let i = 0; i < activities.length; i++) {
    if (activities[i]["duration"] > timeSpent) {
      timeSpent = activities[i]["duration"];
      activity = activities[i]["activity"];
    }
    if (activities[i]["duration"] !== timeSpent) {
      equalTimeSpent = false;
      break;
    }
  }
  if (equalTimeSpent) {
    return `You spent equal time on all activities`;
  } else {
    return `You spent ${timeSpent} min in ${activity}`;
  }
}

const moreTimeSpentOn = calcMostUsedApp(activities);
console.log(moreTimeSpentOn);
