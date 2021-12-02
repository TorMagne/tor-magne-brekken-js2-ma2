import { createList } from './components/createList.js';
import { saveToStorage, getFromStorage } from './utils/storage.js';
import { listKey } from './settings.js';

let listItems = getFromStorage(listKey);

createList(listItems);

const listInput = document.querySelector('.todo-input');
const addNewButton = document.querySelector('.add-btn');

const addItem = () => {
  const itemValue = listInput.value.trim();
  if (itemValue.length >= 1) {
    const newItem = { id: Date.now(), item: itemValue };
    listInput.value = '';
    listInput.focus();
    listItems.push(newItem);

    createList(listItems);
    saveToStorage(listKey, listItems);
  }
};

addNewButton, addEventListener('click', addItem);

const removeFromList = (event) => {
  const deleteItem = event.target.dataset.id;
  console.log(deleteItem);

  const newList = listItems.filter(function (item) {
    if (deleteItem != parseInt(item.id)) {
      return true;
    }
  });

  listItems = newList;

  createList(listItems);
  saveToStorage(listKey, listItems);
  setDeleteListener();
};

function setDeleteListener() {
  const deleteBtn = document.querySelectorAll('.btn-clear');

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', removeFromList);
  });
}

setDeleteListener();

// const deleteBtn = document.querySelectorAll('.btn-clear');

// const removeFromList = (event) => {
//   // console.log(event);
//   const deleteItem = event.target.dataset.id;

//   const newList = listItems.filter(function (item) {
//     if (deleteItem !== item) {
//       return true;
//     }
//   });

//   // listItems = newList;
//   // createList(listItems);
//   console.log(newList);
// };

// deleteBtn.forEach((btn) => {
//   btn.addEventListener('click', removeFromList);
// });
