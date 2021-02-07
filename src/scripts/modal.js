import refs from './refs';

refs.addEventBtn.addEventListener('click', onClickOpenModal);

refs.overley.addEventListener('click', onClickOverlayCloseModal);
refs.closeModal.addEventListener('click', onClickCloseModal);

function onClickOpenModal(evt) {
  evt.preventDefault();
  window.addEventListener('keydown', onKeydownCloseModal);
  refs.modal.classList.add('is-open');
}

function onClickCloseModal() {
  window.removeEventListener('keydown', onKeydownCloseModal);
  refs.modal.classList.remove('is-open');
}

function onClickOverlayCloseModal(evt) {
  if (evt.currentTarget !== evt.target) {
    return;
  }
  onClickCloseModal();
}

function onKeydownCloseModal(evt) {
  if (evt.code !== 'Escape') {
    return;
  }
  onClickCloseModal();
}
