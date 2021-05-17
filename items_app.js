
//Selectors
const storeItems = document.querySelectorAll(".store-item");
const itemSpecs = document.querySelectorAll(".item-spec");
const pagination = document.querySelector(".pagination");
const itemOptions = document.querySelector(".categories-filter");
const storeSection = document.querySelector("#Store");
let currentIndex = 0;

//Event Listeners

pagination.addEventListener("click" , paginate);
itemOptions.addEventListener("click" , filterStoreItems);

//Functions

/**Specification text**/

storeItems.forEach(storeItem => {
    itemSpecs.forEach(itemSpec => {
        const firstHalfOfText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum voluptatem recusandae. Obcaecati nesciunt sint et delectus,";
        const secondHalfOfText = "reprehenderit id tempora unde iure velit odit inventore perspiciatis perferendis, quas assumenda corrupti.";

        itemSpec.innerText = firstHalfOfText;

        const dots = document.createElement("span");
        dots.className = "dots";
        dots.innerText = "......";
        itemSpec.appendChild(dots);

        const secondTextSpan = document.createElement("span");
        secondTextSpan.className = "second-text-span";
        secondTextSpan.innerText = secondHalfOfText;
        itemSpec.appendChild(secondTextSpan);

    });

    storeItem.addEventListener("click" , (e)=> {
        e.preventDefault();
        const clicked = e.target;

        if(clicked.classList.contains("see-more")){
            if(clicked.innerText == "see more"){
                storeItem.children[1].children[0].style.display = "none";
                storeItem.children[1].children[1].style.display = "block";
                clicked.innerText = "see less";
            }

            else{
                storeItem.children[1].children[0].style.display = "block";
                storeItem.children[1].children[1].style.display = "none";
                clicked.innerText = "see more";
            }
        }

    });
});

/******Pagination starts here*******/


/**** Function that displays only the store items chosen by the user on the filter***/ 

function filterStoreItems(event) {
    const choosenOption = event.target;

        switch (choosenOption.value) {
    
            case "all":

                for (itemIndex = 0; itemIndex < storeItems.length; itemIndex++) {
                    storeItems[itemIndex].classList.add("displaying-items");
                }

                for (itemIndex = 0; itemIndex < 4; itemIndex++) {
                    storeItems[itemIndex].classList.remove("displaying-items");
                }
                pagination.style.display = "block";
                break;
    
            case "phones":
                storeItems.forEach((storeItem) => {
                    if(storeItem.classList.contains("phone")){
                        storeItem.classList.remove("displaying-items");
                    }
                    else{
                        storeItem.classList.add("displaying-items");
                    }
                });
                pagination.style.display = "none";
                break;
    
            case "backpacks":
                storeItems.forEach((storeItem) => {
                    if(storeItem.classList.contains("backpack")){
                        storeItem.classList.remove("displaying-items");
                    }
                    else{
                        storeItem.classList.add("displaying-items");
                    }
                });
                pagination.style.display = "none";
                break;
    
            case "sneakers":
                storeItems.forEach((storeItem) => {
                    if(storeItem.classList.contains("sneakers")){
                        storeItem.classList.remove("displaying-items");
                    }
                    else{
                        storeItem.classList.add("displaying-items");
                    }
                });
                pagination.style.display = "none";
                break;
    
            case "watches":
                storeItems.forEach((storeItem) => {
                    if(storeItem.classList.contains("watch")){
                        storeItem.classList.remove("displaying-items");
                    }
                    else{
                        storeItem.classList.add("displaying-items");
                    }
                });
                pagination.style.display = "none";
                break;
    
            case "headwear":
                storeItems.forEach((storeItem) => {
                    if(storeItem.classList.contains("headwear")){
                        storeItem.classList.remove("displaying-items");
                    }
                    else{
                        storeItem.classList.add("displaying-items");
                    }
                });
                pagination.style.display = "none";
                break;
        }

}