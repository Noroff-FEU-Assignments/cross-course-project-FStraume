const buttonAddToCart = document.querySelector(".productpage_ctaaddtocart");
const buttonAddToWishlist = document.querySelector(".productpage_ctaaddtowishlist");
const name = document.querySelector(".product_name");
const price = document.querySelector(".product_price");
const id = document.querySelector(".product_id")
const itemcounter = document.querySelector(".itemcounter")
const wishlistcounter = document.querySelector(".wishlistcounter")
const checkoutSection = document.querySelector(".checkout_products")
const productInfo = document.querySelector(".product_info")



name.innerHTML = product.name;
price.innerHTML = product.price;

//----------------------------------------------------------------//

const cart = []

const cartlogger = []
const wishlistlogger = []

function cartPusher() {
        cartlogger.push(productInfo)
        cart.push(productInfo)
        itemloggerCart()
        buttonAddToCart.innerHTML = "Added to cart"
        addToCart()
}

function itemloggerCart() {
    for (let i = 0; i < cartlogger.length; i++) {
        itemcounter.style.display = "flex";
        itemcounter.innerHTML = cartlogger.length; 
    }
}

function wishlistPusher() {
    wishlistlogger.push(name.innerHTML)
        itemloggerWishlist()
        buttonAddToWishlist.innerHTML = "Added to cart"
}

function itemloggerWishlist() {
    for (let i = 0; i < wishlistlogger.length; i++) {
        wishlistcounter.style.display = "flex";
        wishlistcounter.innerHTML = wishlistlogger.length; 
    }
} 

//----------------------------------------------------------------//

