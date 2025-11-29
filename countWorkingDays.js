function countWorkingDays(year) {
  let totalWorkingDays = 0;
  const holidays = [
    `${year}-01-07`,
    `${year}-04-13`,
    `${year}-04-14`,
    `${year}-04-15`,
    `${year}-11-09`,
  ];
  const isHoliday = (dateStr) => holidays.includes(dateStr);
  let date = new Date(year, 0, 1);
  let end = new Date(year, 11, 31);

  while (date <= end) {
    let day = date.getDay();
    let dateStr = date.toISOString().split("T")[0];
    if (isHoliday(dateStr)) {
      totalWorkingDays += 0;
    } else if (day === 0) {
      totalWorkingDays += 0;
    } else if (day === 6) {
      totalWorkingDays += 0.5;
    } else {
      totalWorkingDays += 1;
    }
    date.setDate(date.getDate() + 1);
  }
  return totalWorkingDays;
}

console.log(countWorkingDays(2025));