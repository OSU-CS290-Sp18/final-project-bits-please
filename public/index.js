
/*ADD ITEM POPUP WINDOW JS*/
//show add item modal
function showAddItemModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var addItemModal = document.getElementById('add-item-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  addItemModal.classList.remove('hidden');

}
//hides add item modal
function hideAddItemModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var addItemModal = document.getElementById('add-item-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  addItemModal.classList.add('hidden');
}

/*  MORE INFO modal js */
//shows info modal
function moreInfoModal() {

  var infoBackdrop = document.getElementById('modal-bdrop');
  var infoModal = document.getElementById('item-modal');

  // Show the modal and its backdrop.
  infoBackdrop.classList.remove('info');
  infoModal.classList.remove('info');

}
//hides info modal
function hideInfoModal() {

  var modalBdrop = document.getElementById('modal-bdrop');
  var itemModal = document.getElementById('item-modal');


  modalBdrop.classList.add('info');
  itemModal.classList.add('info');
}

/*event listener*/
/*add item button*/
var addItemButton = document.getElementById('add-item-button');
if (addItemButton) {
  addItemButton.addEventListener('click', showAddItemModal);
}
/*close add item */
var modalCloseButton = document.querySelector('#add-item-modal .modal-close-button');
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', hideAddItemModal);
}

/*more info button*/
var moreInfoButton = document.getElementById('more-info-button');
if (moreInfoButton) {
  moreInfoButton.addEventListener('click', moreInfoModal);
}
/*close info button*/
var closeinfoButton = document.querySelector('#more-info-modal .info-close-button');
if (closeinfoButton) {
  modalCloseButton.addEventListener('click', hideInfoModal);
}
