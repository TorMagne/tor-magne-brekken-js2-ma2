import { createList } from './components/createList.js';
import { saveToStorage, getFromStorage } from './utils/storage.js';
import { listKey } from './settings.js';

const listItems = getFromStorage(listKey);

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

const deleteBtn = document.querySelectorAll('.btn-clear');

const clearItem = (event) => {
  const id = event.target.dataset.id;
  if (id === listItems) {
    console.log('hello');
  }
  // console.log(id);
  console.log(listItems.id);
};

deleteBtn.forEach((btn) => {
  btn.addEventListener('click', clearItem);
  console.log(btn);
});
