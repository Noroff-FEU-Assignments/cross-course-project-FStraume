const buttonAddToCart = document.querySelector(".productpage_ctaaddtocart");
const buttonAddToWishlist = document.querySelector(".productpage_ctaaddtowishlist");
const name = document.querySelector(".product_name");
const price = document.querySelector(".product_price");
const itemcounter = document.querySelector(".itemcounter")
const wishlistcounter = document.querySelector(".wishlistcounter")

const cart = []
const wishlist = []

console.log(buttonAddToCart)

function addToCart() {
        cart.push(name.innerHTML)
        itemloggerCart()
        buttonAddToCart.innerHTML = "Added to cart"
}

function itemloggerCart() {
    for (let i = 0; i < cart.length; i++) {
        itemcounter.style.display = "flex";
        itemcounter.innerHTML = cart.length; 
    }
}

function addToWishlist() {
        wishlist.push(name.innerHTML)
        itemloggerWishlist()
        buttonAddToWishlist.innerHTML = "Added to cart"
}

function itemloggerWishlist() {
    for (let i = 0; i < wishlist.length; i++) {
        wishlistcounter.style.display = "flex";
        wishlistcounter.innerHTML = wishlist.length; 
    }
} 