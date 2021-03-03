const itemSpecifications = document.querySelectorAll(".item-spec");
const StoreItemList = document.querySelectorAll(".store-item");
const itemOptions = document.querySelectorAll("option");

itemOptions.forEach(option => {
    option.addEventListener("click", (e) => {
        console.log(option);
    })
})

/**A function for see more/less**/

~function () {

    const shortSpecificationsText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis esse nisi quos amet, cumque ad.";
    const fullSpecificationsText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis esse nisi quos amet, cumque ad. Atque nisi voluptates, totam ab laborum distinctio. Laborum blanditiis minus, quod dolorum earum laboriosam!";

    StoreItemList.forEach(storeItem => {
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

