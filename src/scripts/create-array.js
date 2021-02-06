let item = [];
let calendar = [];

export function creatItemsCalendar(days, hours) {
  for (let hour of hours) {
    item = days.map(day => ({
      day,
      hour,
      disc: '',
    }));
    calendar.push(item);
  }
  return calendar;
}
