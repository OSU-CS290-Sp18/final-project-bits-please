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
