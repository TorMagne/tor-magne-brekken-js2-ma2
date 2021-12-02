import { listKey } from '../settings.js';
import { saveToStorage } from '../utils/storage.js';

export const createList = (listItems) => {
  const itemContainer = document.querySelector('.item-container');

  itemContainer.innerHTML = '';

  listItems.forEach((listItem) => {
    let checked = '';

    if (listItem.complete) {
      checked = 'checked';
    }

    itemContainer.innerHTML += `<li>
                                <span class="${checked}">${listItem.item}</span>
                                <div>
                                <input ${checked} type="checkbox" data-id="${listItem.id}"/>
                                <button class="btn-clear" data-id="${listItem.id}">Delete</button>
                                </div>
                                </li>`;
  });
  const checkboxes = document.querySelectorAll('li input');

  const toggleComplete = (event) => {
    const id = event.target.dataset.id;
    const checked = event.target.checked;

    const updatedList = updateList(listItems, id, checked);
    saveToStorage(listKey, updatedList);
    createList(updatedList);
  };

  checkboxes.forEach((box) => {
    box.addEventListener('click', toggleComplete);
  });
};

const updateList = (listItems, id, checked) => {
  const itemIndex = listItems.findIndex((item) => {
    if (item.id === parseInt(id)) {
      return true;
    }
  });

  listItems[itemIndex].complete = checked;

  return listItems;
};
