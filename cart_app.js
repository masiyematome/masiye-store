
//Selectors and variable declarations

const openCartButton = document.querySelector(".cart");
const cartModal = document.querySelector(".cart-page");
const closeCartButton = document.querySelector(".close-cart");

const numberOfItemsText = document.querySelectorAll(".number-of-items-text");
let numberOfItems = 0;

const totalPriceTexts = document.querySelectorAll(".total-price-text");
let totalPrice = 0;

const amount = document.querySelectorAll(".amount");

//Functions

openCartButton.addEventListener("click" , ()=> {
    cartModal.classList.add("opened");
});

cartModal.addEventListener("click" , (e)=> {
    const clickedButton = e.target;

    if(clickedButton.classList.contains("close-cart")){
        cartModal.classList.remove("opened");
    }
});


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


        if (numberOfItems == 0 || numberOfItems > 1) {
            numberOfItemsText[0].innerText = numberOfItems + " Items - ";
            numberOfItemsText[1].innerText = "(" + numberOfItems + " items" + ")";
        }

        else {
            numberOfItemsText[0].innerText = numberOfItems + " Item - ";
            numberOfItemsText[1].innerText = "(" + numberOfItems + " item" + ")";
        }

        totalPriceTexts.forEach((totalPriceText) => {
            totalPriceText.innerText = "  R" + (totalPrice).toFixed(2);
        })

    });
});

