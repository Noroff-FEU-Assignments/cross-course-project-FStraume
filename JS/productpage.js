const displayProducts = document.querySelector(".products_productpage")



for (let i = 0; i < product.length; i++) {
    displayProducts.innerHTML += `
    <div class="products">
    <a href="product_spesific.html?id=${product[i].id}"><img src="${product[i].image}" alt="Picture of the rain jacket" class="imgsize"/></a>
    <hr>
    <h3>${product[i].name}</h3>
    <p>${product[i].price}</p>
    <a href="product_spesific.html?id=${product[i].id}" class="show_more_cta">Show More</a>
    </div>`
}