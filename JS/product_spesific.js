const productInfo = document.querySelector(".product_info")
const itemPicture = document.querySelector(".product_view_big")
const altItemPictures = document.querySelector(".alternate_product_img")
const productButtons = document.querySelector(".productpage_buttons")




//---------------------------Display Item-----------------------------------------//

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const idParam = parameters.get("id");

const url = `/product_spesific.html?id=${idParam};`;

const spesificId = idParam

productInfo.innerHTML += `
    <h1 class="product_name">${product[spesificId].name}</h1>
    <p class="product_price">${product[spesificId].price}</p>
    <p class="product_id">${product[spesificId].id}</p>
    <p class="product_amount">${product[spesificId].amount}</p>`

itemPicture.innerHTML += `<img src="${product[spesificId].image}" alt="Picture of the selected jacket">`
altItemPictures.innerHTML += `<img src="${product[spesificId].image}" alt="Picture of the selected jacket">
<img src="${product[spesificId].image}" alt="Picture of the selected jacket">
<img src="${product[spesificId].image}" alt="Picture of the selected jacket">
<img src="${product[spesificId].image}" alt="Picture of the selected jacket">`


productButtons.innerHTML += `
<button class="addtocart" onclick="addToCart()">
  <div class="pretext">Add to cart</div>
  <div class="pretext donecart">
<div class="posttext"><i class="fas fa-check"></i> ADDED</div>
  </div>
</button>
<p id="cartoptions_spliter">OR</p>

<button class="addtowishlist" onclick="addToWishlist()">
<div class="pretext">Add to wishlist</div>
  <div class="pretext donewishlist">
  <div class="posttext"><i class="fas fa-check"></i>ADDED</div>
  </div> 
</button>`


//---------------------------Add to Cart-----------------------------------------//
//---------Button Inspiration https://codepen.io/ankushc/pen/ReQJrg -------------//
const addToCartButton = document.querySelector(".productpage_ctaaddtocart")
const itemcounter = document.querySelector(".itemcounter")
const buttoncart = document.querySelector(".addtocart");
const buttonwishlist = document.querySelector(".addtowishlist");
const donecart = document.querySelector(".donecart");
const donewishlist = document.querySelector(".donewishlist");
const wishlistcounter = document.querySelector(".wishlistcounter")

var cart = 1;
var wishlist = 1;
console.log(buttoncart);
let added = false;
buttoncart.addEventListener('click',()=>{
  if(added){
    donecart.style.transform = "translate(-110%) skew(-40deg)";
    added = false;    
    itemcounter.style.display = "none";
    itemcounter.value = --cart;

  }
  else{
    donecart.style.transform = "translate(0px)";
    added = true;
    itemcounter.style.display = "flex";
    itemcounter.value = ++cart;

  }
    
});

buttonwishlist.addEventListener('click',()=>{
    if(added){
        donewishlist.style.transform = "translate(-110%) skew(-40deg)";
      added = false;
      wishlistcounter.style.display = "none";
      wishlistcounter.value = --wishlist;
    }
    else{
        donewishlist.style.transform = "translate(0px)";
      added = true;
      wishlistcounter.style.display = "flex";
      wishlistcounter.value = ++wishlist;
    }
      
  });
  
  function addToCart() {
      itemcounter.innerHTML = `<p>${cart}</p>`
  }

  function addToWishlist() {
    wishlistcounter.innerHTML = `<p>${cart}</p>`
}





