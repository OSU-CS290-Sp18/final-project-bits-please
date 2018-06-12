
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

/*  MORE INFO modal js*/
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

  var infoBackdrop = document.getElementById('modal-bdrop');
  var infoModal = document.getElementById('item-modal');

  // Show the modal and its backdrop.
  infoBackdrop.classList.add('info');
  infoModal.classList.add('info');
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
var closeInfoButton = document.querySelector('#item-modal .info-close-button');
if (closeInfoButton) {
  closeInfoButton.addEventListener('click', hideInfoModal);
}
/*add to cart*/
var addToCart = document.querySelector('#item-modal .add-to-cart');
if (addToCart) {
  addToCart.addEventListener('click', hideInfoModal);
}

//Perhaps we should split up our javascript into more than one file?
/********************************
* 
*  SEARCH BAR
*
*  Goal: This will take the input and direct the user to the rentals page with the keywords searched for
*  at the end as a specifier like url.com/rentals/keywords=large_decorative_christmas_trees
*
* Method to allow "ENTER" to do the same thing as the search button from: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
*********************************/

var searchBar= document.getElementById("navbar-search-input");
var searchButton = document.getElementById("navbar-search-button");

searchBar.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        searchButton.click();
    }
});

searchButton.addEventListener("click", function(event){
    let searchInput = searchBar.value;
    if(searchInput == ""){
        return;
    }
    //moving them to rental page with search info if they aren't already there
    window.location.href ='//localhost:3000/rentals/' + searchInput;
    
    //If they're already there, just doing a POST to get the data I want!
    /*FIX*/
});
