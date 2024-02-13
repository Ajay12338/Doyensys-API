const giveWeekDays = (startSunday) => {
  const days = [];
  const currentDate = new Date(startSunday);
  for (let i = 1; i <= 6; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + i);
    days.push(nextDay.toDateString());
  }
  return days;
};
module.exports = giveWeekDays;
