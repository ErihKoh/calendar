import tableBody from '../templates/tbody.hbs';
import tableHead from '../templates/table.hbs';
import refs from './refs';
import { creatItemsCalendar } from './create-array';
import { daysWeek, workTimeDay } from './array';

const calendar = creatItemsCalendar(daysWeek, workTimeDay);

refs.tHead.insertAdjacentHTML('beforeend', tableHead(daysWeek));

function createTableBody(array) {
  for (let arr of array) {
    refs.tBody.insertAdjacentHTML('beforeend', tableBody(arr));
  }
}

createTableBody(calendar);
