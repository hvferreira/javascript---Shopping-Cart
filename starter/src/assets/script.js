// List of products
const products = [
  { name: 'Cherry', 
    price: 1.5, 
    quantity: 0,
    productId: 1, 
    image: 'images/cherry.jpg' 
  },
  { 
    name: 'Orange', 
    price: 2.0, 
    quantity: 0,
    productId: 2, 
    image: 'images/orange.jpg' 
  },
  { 
    name: 'Strawberry', 
    price: 2.5, 
    quantity: 0,
    productId: 3, 
    image: 'images/strawberry.jpg' 
  }
];

// Cart array
let cart = [];

// Add a product to the cart
function addProductToCart(productId) {
  //let product = products.find(product => product.productId === productId);
  let product = getProductByProductId(productId,products);
 
  
  
     product.quantity = product.quantity+ 1;
     
     if (!cart.includes(product)) {
        cart.push(product);
     }
}
function getProductByProductId(productId,productList) {
  return products.find(product => product.productId === productId);
}


// Increase the quantity of a product in the cart
function increaseQuantity(productId) {
  const cartItem = getProductByProductId(productId,products);
  if (cartItem) {
      cartItem.quantity += 1;
  }
}

// Decrease the quantity of a product in the cart
function decreaseQuantity(productId) {

  let  product = getProductByProductId(productId,products);
  product.quantity = product.quantity-1;

  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}

// Remove a product from the cart
function removeProductFromCart(productId) {
  let itemIndex = cart.findIndex(product => product.productId === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity = 0;
    cart.splice(itemIndex, 1);
  }
}

// Calculate the total cost of the cart
function cartTotal() {
   // Check if the cart is empty
   if (cart.length === 0) {
    return 0;
  }
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

let totalPaid = 0;

// Process payment
function pay(amount) {
  totalPaid += amount;

  let remainingAmount = totalPaid - cartTotal();
  if(remainingAmount>=0) {
    totalPaid=0;
    emptyCart();
  }
  return remainingAmount;
}
function emptyCart() {
  cart = [];
  }

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay
  ,emptyCart,
  getProductByProductId
};
