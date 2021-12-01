import { createList } from './createList.js';

export const deleteButton = () => {
  const deleteBtn = document.querySelectorAll('.btn-clear');

  const clearList = () => {
    localStorage.removeItem('list');
    console.log(btn);
    // createList([]);
  };

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', clearList);
  });
};
