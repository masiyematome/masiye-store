const itemSpecifications = document.querySelectorAll(".item-spec");
const seeMoreButtons = document.querySelectorAll(".see-more");
const seeLessButtons = document.querySelectorAll(".see-less");

~function () {
    
    const shortText = "Lorem ipsum dolor .Odio quod molestiae corporis laboriosam...";
    const fullText = "Lorem ipsum dolor .Odio quod molestiae corporis laboriosam, vitae rerum eligendi aut voluptatibus harum incidunt cumque officia.Nulla mollitia voluptatem officia inventore reiciendis qui temporibus error.";
    
;    itemSpecifications.forEach(itemSpecification => {
        itemSpecification.innerText = shortText;
    })

    seeMoreButtons.forEach(seeMoreButton => {
        seeMoreButton.addEventListener("click" , (ev) => {

            ev.preventDefault();
            
            itemSpecifications.forEach(itemSpecification => {
                itemSpecification.innerText = fullText;
            })
            
        })
    })



}();