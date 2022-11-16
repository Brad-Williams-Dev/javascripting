const raisinAlarm = function(cookie) {
  if (cookie.includes("🍇")) {
    return 'Raisin alert!';
  }
  return 'All good!';
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let raisinArr = [];

  for (const item of cookies) {
    if (item.includes("🍇")) {
      raisinArr.push('Raisin Alert!');
    } else {
      raisinArr.push('All good!');
    }
  }
  return raisinArr;
};


console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);