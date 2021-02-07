import { daysWeek, workTimeDay } from './array';
import { creatSelectDay, creatSelectTime } from './create-select-form';
import refs from './refs';
import calendar from './create-table';

const days = daysWeek.slice(1);

creatSelectDay(days);
creatSelectTime(workTimeDay);
let obj = {};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  console.dir(evt.currentTarget.elements.day.value);

  // const formData = new FormData(evt.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log('onFormSubmit -> name', name);
  //   console.log('onFormSubmit -> value', value);
  // });
}
