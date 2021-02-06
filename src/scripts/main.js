import refs from './refs';

refs.tBody.addEventListener('click', e => {
  console.log(e.target.textContent);
});
