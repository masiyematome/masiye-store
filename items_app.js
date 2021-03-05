/**Selectors and variable declaration**/

const itemSpecifications = document.querySelectorAll(".item-spec");
const storeItemList = document.querySelectorAll(".store-item");
const itemOptions = document.querySelectorAll("option");
const pagination = document.querySelector(".pagination");
let currentIndex = 0;

/**Event listeners */

pagination.addEventListener("click"  ,paginate);

/**Functions */

/**Hiding all store items */

~function(){

    for(var i = 4 ; i < 12 ; i++){
        storeItemList[i].classList.add("displaying-items");
    }

}();

/**A function for see more/less**/

~function () {

    const shortSpecificationsText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis esse nisi quos amet, cumque ad.";
    const fullSpecificationsText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis esse nisi quos amet, cumque ad. Atque nisi voluptates, totam ab laborum distinctio. Laborum blanditiis minus, quod dolorum earum laboriosam!";

    storeItemList.forEach(storeItem => {
        Array.from(storeItem.children).forEach(individualChild => {
            if (individualChild.classList.contains("item-spec")) {
                individualChild.textContent = shortSpecificationsText;
            }

            else if (individualChild.classList.contains("see-more")) {
                individualChild.addEventListener("click", (ev) => {
                    ev.preventDefault();

                    if (individualChild.textContent == "see more") {
                        storeItem.children[1].textContent = fullSpecificationsText;
                        individualChild.textContent = "see less"

                    }

                    else if (individualChild.textContent == "see less") {
                        storeItem.children[1].textContent = shortSpecificationsText;
                        individualChild.textContent = "see more"
                    }

                })
            }
        })
    })

}();

/**Pagination */

function paginate(event){

    event.preventDefault();
    const clickedItem = event.target;
    

    storeItemList.forEach((storeItem) => {
        storeItem.classList.add("displaying-items");
    })

    Array.from(pagination.children).forEach(button => {
        button.classList.remove("clicked");
    })

    if(clickedItem.classList.contains("previous")){
        clickedItem.classList.add("clicked");
        console.log("I will take you to the previous page");
    }

    else if(clickedItem.classList.contains("first-page")){
        clickedItem.classList.add("clicked");
        currentIndex = 0;
    }

    else if(clickedItem.classList.contains("second-page")){
        clickedItem.classList.add("clicked");
        currentIndex = 1;
    }

    else if(clickedItem.classList.contains("third-page")){
        clickedItem.classList.add("clicked");
        currentIndex = 2;
    }

    else if(clickedItem.classList.contains("next")){
        clickedItem.classList.add("clicked");
        
    }


}





