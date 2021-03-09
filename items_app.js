
//Selectors
const storeItems = document.querySelectorAll(".store-item");
const itemSpecs = document.querySelectorAll(".item-spec");
const pagination = document.querySelector(".pagination");
let currentIndex = 0;


//Event Listeners

pagination.addEventListener("click" , paginate);

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

/**Pagination starts here**/

function paginate(ev){
    ev.preventDefault();
    const clickedButton = ev.target;


    if(clickedButton.classList.contains("previous")){
        if(currentIndex == 0){
            console.log("I am at " + currentIndex + " so, I can not go back");
        }

        else{
            currentIndex = currentIndex - 1;
            console.log(currentIndex);
        }
    }

    else if(clickedButton.classList.contains("first-page")){
        currentIndex = 0;
        console.log("I am at index " + currentIndex);
    }

    else if(clickedButton.classList.contains("second-page")){
        currentIndex = 1;
        console.log("I am at index " + currentIndex);
    }

    else if(clickedButton.classList.contains("third-page")){
        currentIndex = 2;
        console.log("I am at index " + currentIndex);
    }

    else if(clickedButton.classList.contains("next")){
        if(currentIndex == 2) {
            console.log("I am " + currentIndex + " So i can not go forward");
        }

        else{
            currentIndex = currentIndex + 1;
            console.log(currentIndex);
        }
    }

}