const carousel = document.querySelector(".section3-carousel");
const firstSlide = carousel.querySelectorAll("img")[0];
const arrowButtons = document.querySelectorAll(".wrapper i");

let dragStartPostition = false, prevPageX, prevScrollLeft;
let firstSlideWidth = firstSlide.clientWidth + 4;
// first slide width & adding 4px margin value

arrowButtons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left-arrow" ? -firstSlideWidth : firstSlideWidth;
        // if left icon is clicked, reduce the width value from the carousel scroll left, else add to it
    });
});

const dragBegin = function(e) {
    // updating global variables value on mouse down event
    dragStartPostition = true;
    // By default isDragging is false
    // and it will only be true if the mouse btn is clicked
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
    // scrollLeft provides the number of pixels of the
    // element content that is scrolled horizontally
};

const dragging = function(e) {
    // scrolling to the left according to mouse pointer
    if(!dragStartPostition) {return;}
    e.preventDefault();
    //This prevents images from dragging initially
    // carousel.classList.add("dragging");
    let positionDifference = e.pageX - prevScrollLeft;
    carousel.scrollLeft = prevScrollLeft - positionDifference;     //scrollLeft set or return the number of pixels an element's content is crolled horizontally
}

const dragEnd = () => {
    dragStartPostition = false;
    // carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragBegin);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragEnd); // this sets isDragging to false once the user released the mouse btn, which stops images from sliding untill clicked again