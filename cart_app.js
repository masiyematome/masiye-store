
const numberOfItemsText = document.querySelector(".number-of-items-text");
let numberOfItems = 0;

const totalPriceText = document.querySelector(".total-price-text");
let totalPrice = 0;



storeItems.forEach((storeItem) => {
    storeItem.addEventListener("click" , (e) => {
        
        const clicked = e.target;

        if (clicked.classList.contains("add-to-cart")) {
            numberOfItems = numberOfItems + 1;
            totalPrice = totalPrice + parseFloat(storeItem.children[4].children[0].innerText);
            clicked.classList.add("added-to-cart");

            clicked.innerHTML = '<i class = "fa fa-check"></i>' + "Added to Cart";

            setTimeout(() => {
                clicked.classList.remove("added-to-cart");
                clicked.innerHTML = '<i class = "fa fa-cart-plus"></i>' + 'Add to cart';
            }, 1500);

        }

        numberOfItemsText.innerText = numberOfItems + " Items - R";
        totalPriceText.innerText = (totalPrice).toFixed(2);

    });
});

