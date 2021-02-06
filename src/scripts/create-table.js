import tableBody from '../templates/tbody.hbs';
import tableHead from '../templates/table.hbs';
import { creatItemsCalendar } from './create-array';
import { daysWeek, workTimeDay } from './array';

const tHead = document.querySelector('.table-head');
const tBody = document.querySelector('.table-body');

const calendar = creatItemsCalendar(daysWeek, workTimeDay);

tHead.insertAdjacentHTML('beforeend', tableHead(daysWeek));

function createTableBody(array) {
  for (let arr of array) {
    tBody.insertAdjacentHTML('beforeend', tableBody(arr));
  }
}

createTableBody(calendar);
