const itemSpecifications = document.querySelectorAll(".item-spec");
const StoreItemList = document.querySelectorAll(".store-item");

~function () {

    const shortSpecificationsText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis esse nisi quos amet, cumque ad.";
    const fullSpecificationsText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis esse nisi quos amet, cumque ad. Atque nisi voluptates, totam ab laborum distinctio. Laborum blanditiis minus, quod dolorum earum laboriosam!";

    StoreItemList.forEach(storeItem => {
        Array.from(storeItem.children).forEach(individualChild => {
            if(individualChild.classList.contains("item-spec")){
                individualChild.textContent = shortSpecificationsText;
            }

        })
    })

}();
