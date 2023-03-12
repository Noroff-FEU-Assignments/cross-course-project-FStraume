const cartItem = document.querySelector(".checkout_products")
const cartItemName = document.querySelector(".checkout_item_name")
const cartItemPrice = document.querySelector(".checkout_item_price")

for (let i = 0; i < product.length; i++) {
    cartItem.innerHTML += `
    <div class="checkout_item">
    <img src="${product[i].image}" alt="pictrue of selected product">
    <h2 class="item_info">${product[i].name}</h2>
    <p class="item_info">Black</p>
    <p class="item_info">XL</p>
  </div>`

  cartItemName.innerHTML += `<p>${product[i].name}</p>`
  cartItemPrice.innerHTML += `<p>${product[i].price}</p>`

}