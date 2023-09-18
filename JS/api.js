const baseUrl = "https://straume.online/RainyDays/wp-json/wc/v3/products?consumer_key=ck_2bdffcb37cf6f3f699baa88b16b5f2d469e83d09&consumer_secret=cs_010ab9e71badb58468674bb1b48de818c406f97f"
const productContainer = document.querySelector(".products_productpage");
const productBestseller = document.querySelector("#product_bestseller");

var idPost=document.getElementById("product_bestseller");

console.log(idPost)

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)
    products.forEach(function(product){
      productContainer.innerHTML += `
        <div class="products">
        <a href="product_spesific.html?id=${product.id}">
        <img src="${product.images[0].src}" alt="Picture of the rain jacket" class="imgsize"/></a>
        <hr>
        <h3>${product.name}</h3>
        <p>${product.price}$</p>
        <a href="product_spesific.html?id=${product.id}" class="show_more_cta">Show More</a>
        </div>`;
    });
}

getProducts(baseUrl)

