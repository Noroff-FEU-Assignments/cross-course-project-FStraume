const productInfo = document.querySelector(".product_info")
const itemPicture = document.querySelector(".product_view_big")
const altItemPictures = document.querySelector(".alternate_product_img")
const productButtons = document.querySelector(".productpage_buttons")


//---------------------------Display Item-----------------------------------------//

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const idParam = parameters.get("id");
const url = "https://straume.online/RainyDays/wp-json/wc/v3/products/" + idParam + "?consumer_key=ck_2bdffcb37cf6f3f699baa88b16b5f2d469e83d09&consumer_secret=cs_010ab9e71badb58468674bb1b48de818c406f97f";

const spesificId = idParam

async function fetchProd() {

try {
const response = await fetch(url);
const spesificId = await response.json();
 
createHTML(spesificId)
}
catch(error) {
console.log(error)
}
}

fetchProd();

function createHTML(spesificId) {
productInfo.innerHTML += `
<h1 class="product_name">${spesificId.name}</h1>
<p class="product_price">${spesificId.price}$</p>
<p class="product_id">${spesificId.id}</p>`
//<p class="product_amount">${product[spesificId].amount}</p>

itemPicture.innerHTML += `<img src="${spesificId.images[0].src}" alt="Picture of the selected jacket">`
altItemPictures.innerHTML += `<img src="${spesificId.images[0].src}" alt="Picture of the selected jacket">
<img src="${spesificId.images[0].src}" alt="Picture of the selected jacket">
<img src="${spesificId.images[0].src}" alt="Picture of the selected jacket">
<img src="${spesificId.images[0].src}" alt="Picture of the selected jacket">`



productButtons.innerHTML += `
<button class="addtocart" onclick="addToCart()">
<div class="pretext">Add to cart</div>
<div class="pretext doneCart">
<div class="posttext"><i class="fas fa-check"></i> ADDED</div>
</div>
</button>
<p id="cartoptions_spliter">OR</p>

<button class="addtowishlist" onclick="addToWishlist()">
<div class="pretext">Add to wishlist</div>
<div class="pretext doneWishlist">
<div class="posttext"><i class="fas fa-check"></i>ADDED</div>
</div> 
</button>`

}


//---------------------------Add to Cart-----------------------------------------//
//---------Button Inspiration https://codepen.io/ankushc/pen/ReQJrg -------------//
const addToCartButton = document.querySelector(".productpage_ctaaddtocart")
const itemCounter = document.querySelector(".itemCounter")
const buttonCart = document.querySelector(".addtocart");
const buttonWishlist = document.querySelector(".addtowishlist");
const doneCart = document.querySelector(".doneCart");
const doneWishlist = document.querySelector(".doneWishlist");
const wishlistCounter = document.querySelector(".wishlistCounter")

var cart = 1;
var wishlist = 1;
console.log(buttonCart);
let added = false;
buttonCart.addEventListener('click',()=>{
if(added){
doneCart.style.transform = "translate(-110%) skew(-40deg)";
added = false;    
itemCounter.style.display = "none";
itemCounter.value = --cart;

}
else{
doneCart.style.transform = "translate(0px)";
added = true;
itemCounter.style.display = "flex";
itemCounter.value = ++cart;

}

});

buttonWishlist.addEventListener('click',()=>{
if(added){
doneWishlist.style.transform = "translate(-110%) skew(-40deg)";
added = false;
wishlistCounter.style.display = "none";
wishlistCounter.value = --wishlist;
}
else{
doneWishlist.style.transform = "translate(0px)";
added = true;
wishlistCounter.style.display = "flex";
wishlistCounter.value = ++wishlist;
}

});

function addToCart() {
itemCounter.innerHTML = `<p>${cart}</p>`
}

function addToWishlist() {
wishlistCounter.innerHTML = `<p>${cart}</p>`
}





