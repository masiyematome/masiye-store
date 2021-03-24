/**Search button and input already declared as variables in main_app.js */

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const inputAlert = document.querySelector(".input-alert");
const noResultFoundText = document.querySelector(".no-result-found");

searchButton.addEventListener("click" , () => {
    if(searchInput.classList.contains("toggle-able")){
        storeItems.forEach((storeItem) => {
            const storeItemName = storeItem.querySelector(".store-item-name").innerText.toLowerCase();
            let searchInputText = searchInput.value.toLowerCase();

            if(searchInputText == ""){
                inputAlert.style.display = "block";
            }

            else{
                if(storeItemName.includes(searchInputText)){
                    storeItem.style.display = "block";
                    searchInput.classList.remove("toggle-able");

                    const y = storeItem.getBoundingClientRect().top + window.scrollY;
                    window.scroll({
                        top: y,
                        behavior: 'smooth'
                    });

                }
    
                else{
                    storeItem.style.display = "none";
                    // storeSection.scrollIntoView();
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
