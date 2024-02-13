const getSundays = (year, month) => {
  const sundays = [];
  const firstDay = new Date(year, month - 1, 1);
  const firstSunday = 1 + ((7 - firstDay.getDay()) % 7);
  for (let day = firstSunday; day <= 31; day += 7) {
    const date = new Date(year, month - 1, day);
    if (date.getMonth() === month - 1) {
      sundays.push(date.toDateString());
    } else {
      break;
    }
  }
  return sundays;
};
const nov = getSundays(2023, 11);
const dec = getSundays(2023, 12);
const jan = getSundays(2024, 1);
const feb = getSundays(2024, 2);
const mar = getSundays(2024, 3);
const apr = getSundays(2024, 4);
const totalDates = [...nov, ...dec, ...jan, ...feb, ...mar, ...apr];

const item = totalDates.map((currVal) => {
  return { d: currVal.slice(4) };
});

const dates = {
  items: item,
};
module.exports = dates;
