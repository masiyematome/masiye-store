const itemSpecifications = document.querySelectorAll(".item-spec");
const storeItemList = document.querySelectorAll(".store-item");
const itemOptions = document.querySelectorAll("option");
const pagination = document.querySelector(".pagination");

itemOptions.forEach(option => {
    option.addEventListener("click", (e) => {
        console.log(option);
    })
})

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

~function(){
    let numberOfItems = 0;
    let numberOfPages;

    storeItemList.forEach(storeItem => {
        numberOfItems = numberOfItems + 1;
    })

    numberOfPages = numberOfItems / 4;

    for(var i = 0 ; i < numberOfPages ; i++){
        const pageLink = document.createElement("a");
        pageLink.innerText = i + 1;
        pagination.appendChild(pageLink);
    }

}();

/**Working with the buttons on the pagination */

pagination.addEventListener("click" , (event) => {
    const clickedButton  = event.target;

    Array.from(pagination.children).forEach((button) => {
        button.classList.remove("clicked");
    })

    if(clickedButton.matches("a")){
        clickedButton.classList.add("clicked");
    }
})



