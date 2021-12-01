import { createList } from './components/createList.js';
import { saveToStorage, getFromStorage } from './utils/storage.js';
import { listKey } from './settings.js';
import { deleteButton } from './components/deleteButton.js';

const listItems = getFromStorage(listKey);

createList(listItems);
deleteButton();

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

  //   console.log(listItems);
};

addNewButton, addEventListener('click', addItem);
