
const storeItems = document.querySelectorAll(".store-item");
const itemSpecs = document.querySelectorAll(".item-spec");

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

/**Pagination starts here**/