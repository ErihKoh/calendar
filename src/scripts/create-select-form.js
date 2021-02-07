import refs from './refs';
import selectDay from '../templates/select-day.hbs';
import selectTime from '../templates/select-time.hbs';

export function creatSelectDay(arr) {
  refs.slctDay.insertAdjacentHTML('beforeend', selectDay(arr));
}
export function creatSelectTime(arr) {
  refs.slctTime.insertAdjacentHTML('beforeend', selectTime(arr));
}
