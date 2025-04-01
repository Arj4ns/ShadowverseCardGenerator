//passing in like a billion things
//maybe worth splitting it into seperate functions
//lets just try to load an image for now though


//so we have it set that when we pass a url to the image in, it loads it onto the screen at the click of a button.
//lets see if we can start to slap a translation over it.
generateCard = (url) => {
    let card = document.getElementById("card")
    card.innerHTML = ""
    let cardPic = document.createElement("img")
    cardPic.src = url
    card.appendChild(cardPic)
}

document.getElementById("generate-card").addEventListener("click", function(e){
    generateCard("https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP11/bp11-019.png")
})