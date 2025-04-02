document.addEventListener('DOMContentLoaded', function () {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const backdrop = document.querySelector('.backdrop');

  function toggleModal() {
    modal.classList.toggle('is-hidden');

    document.body.classList.toggle('no-scroll');
  }

  openModalBtns.forEach(button => {
    button.addEventListener('click', toggleModal);
  });

  closeModalBtn.addEventListener('click', toggleModal);

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      toggleModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  });
});
