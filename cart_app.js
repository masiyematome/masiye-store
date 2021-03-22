
//Selectors and variable declarations

const openCartButton = document.querySelector(".cart");
const cartModal = document.querySelector(".cart-page-wrapper");
const addedItemsCard = document.querySelector(".added-items");
const emptyCartText = document.querySelector(".empty-cart-text");
const storeItemImages = document.querySelectorAll(".store-item-image");

const numberOfItemsText = document.querySelectorAll(".number-of-items-text");
let numberOfItems = 0;

const totalPriceTexts = document.querySelectorAll(".total-price-text");
let totalPrice = 0;


//Functions

openCartButton.addEventListener("click" , ()=> {
    cartModal.classList.add("opened");
    document.body.style.overflow = "hidden";
});

cartModal.addEventListener("click" , (e)=> {
    const clickedButton = e.target;

    if(clickedButton.classList.contains("close-cart")){
        cartModal.classList.remove("opened");
    }
});

function updateNumberOfItems(){
    if(numberOfItems > 1){
        numberOfItemsText[0].innerText = numberOfItems + " Items - ";
        numberOfItemsText[1].innerText = "(" + numberOfItems + " items" + ")";
    }

    else if (numberOfItems == 0) {
        totalPrice = 0;
        numberOfItemsText[0].innerText = numberOfItems + " Items - ";
        numberOfItemsText[1].innerText = "(" + numberOfItems + " items" + ")";
        emptyCartText.style.display = "block";
    }

    else {
        numberOfItemsText[0].innerText = numberOfItems + " Item - ";
        numberOfItemsText[1].innerText = "(" + numberOfItems + " item" + ")";
    }
}

function updateTotalPriceAmount(){
    totalPriceTexts.forEach((totalPriceText) => {

        totalPriceText.innerText = "  R" + (totalPrice).toFixed(2);
    })
}

/**A button for cart calculations */

storeItems.forEach((storeItem) => {
    storeItem.addEventListener("click" , (e) => {
        
        const clicked = e.target;
        const itemPriceAmount = storeItem.querySelector(".amount");


        if (clicked.classList.contains("add-to-cart")) {
            numberOfItems = numberOfItems + 1;

            totalPrice = totalPrice + parseFloat(itemPriceAmount.innerText);
                        
            clicked.classList.add("added-to-cart");

            clicked.innerHTML = '<i class = "fa fa-check"></i>' + "Added to Cart";

            setTimeout(() => {
                clicked.classList.remove("added-to-cart");
                clicked.innerHTML = '<i class = "fa fa-cart-plus"></i>' + 'Add to cart';
            }, 1500);

             /**Add the clicked item to cart **/

                const storeItemName = storeItem.querySelector(".store-item-name").innerText;
                const storeItemImage = storeItem.querySelector("img").src;

                const itemInCart = document.createElement("div");
                itemInCart.className = "new-cart-item";

                const cartItemFirstPart = document.createElement("div");
                cartItemFirstPart.className = "cart-item-first-part";

                const itemInCartImageHolder = document.createElement("div");
                itemInCartImageHolder.className = "cart-item-image-holder";
                cartItemFirstPart.appendChild(itemInCartImageHolder);

                const itemInCartImage = document.createElement("img");
                itemInCartImage.className = "cart-item-image";
                itemInCartImage.src = storeItemImage;
                itemInCartImageHolder.appendChild(itemInCartImage);

                const cartItemFirstPartTexts = document.createElement("div");
                cartItemFirstPartTexts.className - "cart-item-first-part-texts";
                
                const itemInCartName = document.createElement("h4");
                itemInCartName.className = "cart-item-name";
                itemInCartName.innerText = storeItemName;
                cartItemFirstPartTexts.appendChild(itemInCartName);

                const itemInCartPrice = document.createElement("h4");
                itemInCartPrice.className = "cart-item-price";
                itemInCartPrice.innerText = "R" + itemPriceAmount.innerText;
                cartItemFirstPartTexts.appendChild(itemInCartPrice);

                const cartItemSecondPart = document.createElement("div");
                cartItemSecondPart.className = "cart-item-second-part";

                const deleteButton = document.createElement("button");
                deleteButton.className = "delete-item-button";
                deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
                cartItemSecondPart.appendChild(deleteButton);
                
                cartItemFirstPart.appendChild(cartItemFirstPartTexts);

                itemInCart.appendChild(cartItemFirstPart);
                itemInCart.appendChild(cartItemSecondPart);
                addedItemsCard.appendChild(itemInCart);

                updateNumberOfItems();
                updateTotalPriceAmount();

                emptyCartText.style.display = "none";

        }
    
    });
});

addedItemsCard.addEventListener("click" , (e) => {
    const clicked = e.target;

    if(clicked.classList.contains("delete-item-button")){
        const cartItemSecondDiv = clicked.parentElement;
        const cartItem = cartItemSecondDiv.parentElement;

        cartItem.remove();

        const cartItemFirstDiv = cartItem.children[0];
        const cartItemFirstDivTexts = cartItemFirstDiv.children[1];
        const cartItemPrice = cartItemFirstDivTexts.children[1].innerText;

        numberOfItems = numberOfItems - 1;

        totalPrice = totalPrice - cartItemPrice;
        
        updateNumberOfItems();
        updateTotalPriceAmount();

    }
})

