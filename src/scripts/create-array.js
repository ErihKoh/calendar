const daysWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const workTimeDay = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];

let item = [];
let calendar = [];

function creatItemsCalendar(days, hours) {
  for (let day of days) {
    item = hours.map(time => ({
      day,
      time,
    }));
    calendar.push(item);
  }
  return (calendar = calendar.flat(1));
}

creatItemsCalendar(daysWeek, workTimeDay);

console.log(calendar);
