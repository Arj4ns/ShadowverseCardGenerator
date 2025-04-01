//passing in like a billion things
//maybe worth splitting it into seperate functions
//lets just try to load an image for now though


//so we have it set that when we pass a url to the image in, it loads it onto the screen at the click of a button.
//lets see if we can start to slap a translation over it.

let effect = "Evolve (1): Evolve this follower."
let name = "Bunny & Baron, Specter Duo"
let attr = "Frontier / Thief"
let img = "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP11/bp11-019.png"

// let effect = "Evolve (1): Evolve this follower."
// let name = "Drache, Fiery Dragonlord"
// let attr = "Frontier / Dragonewt / Draconic Duelist"
// let img = "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP13/bp13-054.png"

generateCard = (url) => {
    
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = ""
    card.style.backgroundImage = "url(" + url + ")"
    return card
}

generateText = (card, name, effect, attr) => {
    let nameBox = document.createElement("div")
    nameBox.classList.add("card-name")
    nameBox.textContent = name
    card.appendChild(nameBox)
}

document.getElementById("generate-card").addEventListener("click", function(e){
    let cardList = document.getElementById("card-list")
    let card = generateCard(img)
    generateText(card, name, effect, attr)
    cardList.appendChild(card)
})