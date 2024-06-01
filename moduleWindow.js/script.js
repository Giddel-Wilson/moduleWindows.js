'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnOpenModal = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');

btnOpenModal.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});