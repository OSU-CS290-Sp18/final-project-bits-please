function showAddItemModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var addItemModal = document.getElementById('add-item-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  addItemModal.classList.remove('hidden');

}

var addItemButton = document.getElementById('add-item-button');
if (addItemButton) {
  addItemButton.addEventListener('click', showAddItemModal);
}
function hideAddItemModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var addItemModal = document.getElementById('add-item-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  addItemModal.classList.add('hidden');
}
var modalCloseButton = document.querySelector('#add-item-modal .modal-close-button');
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', hideAddItemModal);
}
/*-------------- JS FOR MORE INFO MODAL--------- */
function moreInfoModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var infoModal = document.getElementById('more-info-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  infoModal.classList.remove('hidden');

}

var moreInfoButton = document.getElementById('more-info-button');
if (moreInfoButton) {
  moreInfoButton.addEventListener('click', moreInfoModal);
}

function hideInfoModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var itemModal = document.getElementById('more-info-modal');


  modalBackdrop.classList.add('hidden');
  itemModal.classList.add('hidden');
}
var modalCloseButton = document.querySelector('#more-info-modal .modal-close-button');
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', hideInfoModal);
}
