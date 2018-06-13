var cart = [];

var Item = function (name, price, count) {
this.name = name
this.price = price
this.count = count
};

function addItemToCart(name, price, count)
{
  for (var i in cart) {
    if (cart[i].name === name)  {
    
    cart[i].count += count;
    return;
  }
  }
  var item = new Item(name, price, count);
  cart.push(item);
    saveCart();

}

function removeItemFromCart(name) {
  for ( var i in cart) {
    if(cart[i].name === name) {
     cart[i].count--;
     if (cart[i].count === 0 {
      cart.splice(i,1);
     }
     break;
  }
  
  }
  saveCart();
}

function removeItemFromCartAll(name) {
  for (var i in cart) {
  if  (cart[i].name === name) {
      cart.splice(i, 1);
      break;
      }
     }
     saveCart();
    }
}

function clearCart()  {
 cart = [];
 saveCart();
 }
 
 function countCart() {
    var totalCount = 0;
    for (var i in cart)  {
    totalCount += cart[i].count;
    }
    return totalCount;
 }
 
 function costCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price;
    }
    return totalCost;
  }
 
 }

 function listCart() {
    var copyCart = [];
   for (var i in cart) {
     var item = cart[i];
     var itemCopy = {};
     for (var j in item) {
          itemCopy[j] = item[j];
     }
     copyCart.push(itemCopy);
 }
   return copyCart;
 }

function saveCart()  {
 
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
  
}

function loadCart()  {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
}
