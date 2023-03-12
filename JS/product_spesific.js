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

console.log(product[spesificId])

productInfo.innerHTML += `
    <h1 class="product_name">${product[spesificId].name}</h1>
    <p class="product_price">${product[spesificId].price}</p>
    <p class="product_id">${product[spesificId].id}</p>`

itemPicture.innerHTML += `<img src="${product[spesificId].image}" alt="Picture of the selected jacket">`
altItemPictures.innerHTML += `<img src="${product[spesificId].image}" alt="Picture of the selected jacket">
<img src="${product[spesificId].image}" alt="Picture of the selected jacket">
<img src="${product[spesificId].image}" alt="Picture of the selected jacket">
<img src="${product[spesificId].image}" alt="Picture of the selected jacket">`

productButtons.innerHTML += `
<button class="productpage_ctaaddtocart" onclick="addToCart(${product[spesificId].id})">Add to cart</button>
<p id="cartoptions_spliter">OR</p>
<button class="productpage_ctaaddtowishlist"  onclick="addToCart(${product[spesificId].id})">Add to wishlist</button>`



//---------------------------Add to Cart-----------------------------------------//

let cart = [];

function addToCart(id) {
    if(cart.some((item) => item.id === id)){
        alert("Product already in cart")
    }
    else{
        const item = product.find((product) => product.id === id)
        cart.push(item)
    
        
    }
    
}
