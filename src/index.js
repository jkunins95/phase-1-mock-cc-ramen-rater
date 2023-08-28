// Write your code here
const API = "http://localhost:3000/ramens";
const ramenMenu = document.getElementById("ramen-menu");

el("new-ramen").addEventListener("submit", createNewRamen);
// Deliverables
// 1) When the page loads, request the data form the server to get all the ramen objects

document.addEventListener("DOMContentLoaded", () => {
    fetch(API)
    .then(resp => resp.json())
    // do something with the data!!!
    .then(renderRamens)
});

// then, display the image for each of the ramen using an img tag inside the #ramen-menu div

function renderRamens(ramens) {
    console.log(ramens)
    // iterate through the ramens
    ramens.forEach(renderRamen)
};

function renderRamen(ramen) {
    // console.log(ramen)

    // display each one in an img tag
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;

    ramenMenu.append(ramenImage)
    
    // 2) Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says "insert comment here" and "insert rating here"
    ramenImage.addEventListener("click", (e) => renderDetails(ramen))
}

function renderDetails(ramen) {
    console.log(ramen.image)
    const detailImage = el("detail-image");
    const ramenName = el("ramen-name");
    const restaurantName = el("restaurant-name");
    const ratingDislay = el("rating-display");
    const commentDisplay = el("comment-display")

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    ratingDislay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
}

// refactoring
function el(elementName) {
    return document.getElementById(elementName)
};

// Create a new ramen after submitting the "new-ramen" form
function createNewRamen(e) {
    e.preventDefault();

    const newRamen = {
        name: e.target.name.value,
        rating: e.target.rating.value,
        restuarant: e.target.restaurant.value,
        comment: e.target['new-comment.value'],
        image: e.target.image.value,
    }
    renderRamen(newRamen)
    // console.log(newRamen)
};