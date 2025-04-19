const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelector(".fa-cart-shopping");
addCartButtons.forEach(button => {
    button.addEventListener("click", even => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    });
});