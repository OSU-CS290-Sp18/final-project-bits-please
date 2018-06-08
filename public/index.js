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
