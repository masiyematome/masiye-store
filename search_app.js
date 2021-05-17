/**Search button and input already declared as variables in main_app.js */

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const inputAlert = document.querySelector(".input-alert");
const noResultFoundText = document.querySelector(".no-result-found");

searchButton.addEventListener("click" , (e) => {
    if(searchInput.classList.contains("toggle-able")){
        storeItems.forEach((storeItem) => {
            const storeItemName = storeItem.querySelector(".store-item-name").innerText.toLowerCase();
            let searchInputText = searchInput.value.toLowerCase();

            if(searchInputText == ""){
                inputAlert.style.display = "block";
            }

            else{
                if(storeItemName.includes(searchInputText)){
                    storeItem.classList.remove("displaying-items");
                    searchInput.classList.remove("toggle-able");

                    const sizeOfItem = storeSection.getBoundingClientRect();

                    window.scroll({
                        top: sizeOfItem.top + window.scrollY,
                    });


                }
    
                else{
                    storeItem.classList.add("displaying-items");

                    const sizeOfItem = storeSection.getBoundingClientRect();
                    
                    window.scroll({
                        top: sizeOfItem.top + window.scrollY,
                    });
                }
            }

            searchInput.addEventListener("click",()=>{
                inputAlert.style.display = "none";
            })

        })

        searchInput.value = "";
    }

    else{
        searchInput.classList.add("toggle-able");
    }
})
