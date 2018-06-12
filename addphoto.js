
var picURL = document.getElementById("item-url-input");
var price = document.getElementById("price-input");
var qty = document.getElementById("qty-input");
var description = document.getElementById("item-description-input");
var acceptBtn = document.getElementById("modal-accept");

alert("I'm here");
acceptBtn.addEventListener("click", function(){
    if(!picURL || !price || !qty || !description){
        alert("You must fill in all of the required fields!");
        return;
    }
    
    
})