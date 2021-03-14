
//Selectors and variable declarations

const openCartButton = document.querySelector(".cart");
const cartPage = document.querySelector(".cart-page");

const allLinks = document.querySelectorAll("#main-menu a");


const numberOfItemsText = document.querySelector(".number-of-items-text");
let numberOfItems = 0;

const totalPriceText = document.querySelector(".total-price-text");
let totalPrice = 0;

const amount = document.querySelectorAll(".amount");

//Functions

/*A function that removes the modal on the click of a link*/

allLinks.forEach((link) => {
    link.addEventListener("click" , ()=> {
        cartPage.style.display = "none";
    })
})

/**A button for cart modal */

openCartButton.addEventListener("click" , () => {
    cartPage.style.display = "block";
})

/**A button for cart calculations */

storeItems.forEach((storeItem) => {
    storeItem.addEventListener("click" , (e) => {
        
        const clicked = e.target;
        const underImageContent = storeItem.children[4];
        const itemPrice = underImageContent.children[0];
        const itemPriceAmount = itemPrice.children[1];


        if (clicked.classList.contains("add-to-cart")) {
            numberOfItems = numberOfItems + 1;

            totalPrice = totalPrice + parseFloat(itemPriceAmount.innerText);
            
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

