
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


/* Data Interaction and Server Work*/
var photoURL = document.getElementById("item-url-input");
var price = document.getElementById("price-input");
var qty = document.getElementById("qty-input");
var description = document.getElementById("item-description-input");
var acceptBtn = document.getElementById("modal-accept");

acceptBtn.addEventListener("click", function(){
    if(!photoURL.value || !price.value || !qty.value || !description.value){
        alert("You must fill in all of the required fields!");
        return;
    }
    
    var upload = new XMLHttpRequest();
    upload.open('POST', "/addItem");
    upload.setRequestHeader('Content-Type', 'application/json');
    
    var newItem = {
        photoURL: photoURL.value,
        price: price.value,
        qty: qty.value,
        description: description.value
    };
    
    uploadBody = JSON.stringify(newItem);
    upload.send(uploadBody);
    hideAddItemModal(); //Erin edited here 6:28 6/13   
});

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

var modalCancelButton = document.getElementById('modal-cancel');
if (modalCancelButton) {
  modalCancelButton.addEventListener('click', hideAddItemModal);
  hideAddItemModal(); //Erin edited here 6:28 6/13   
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
*  at the end as a specifier like url.com/rentals/large%20decorative%20christmas%20trees
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
    window.location.href ='//localhost:3000/rentals/' + searchInput; /*CHANGE TO FINAL URL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    
    /*Work In Progress*/
});
