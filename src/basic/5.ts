// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і
// повертає boolean значення, що вказує, чи це день робочий чи вихідний.

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// const isWeekend = (day) => {
// }

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  let dayType = false;
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    dayType = true;
  }
  return dayType;
};
