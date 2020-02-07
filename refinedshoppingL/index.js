'use strict';

const STORE = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];


function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  
  return items.join("");
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}

////////////////////////////////////////////////////////////////////////////////////////////

function newItemGet(){
//this fucntion will wait for the add item submit button to be clicked and find its value.
}

function newItemListAdd(){
// this function creates the HTML element needed to add to the DOM by using the generateItemElement function and the value from newItemGet
}



function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log('`handleNewItemSubmit` ran');
}


/////////////////////////////////////////////////////////////////////////////////////////


function clickCheckListen(){
  //this fucntion will wait for the check button to be clicked and find the parent list element of the button
}

function checkToggle(){
  //This function will either notify the styling CSS to strike through the item or un-strike through the item based on its current status.  It will create a new list element with the correct class attribute and add it to the list and/or replace the old element using generateItemElement
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log('`handleItemCheckClicked` ran');
}

////////////////////////////////////////////////////////////////////////////////////////

function clickDeleteListen(){
  //this fucntion will wait for the delete button to be clicked and find the parent list element of the button.
}

function deleteItem(){
  //This function will remove the element of the delete button clicked.
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran')
}
////////////////////////////////////////////////////////////////////////////////////////



// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);