//passing in like a billion things
//maybe worth splitting it into seperate functions
//lets just try to load an image for now though


//so we have it set that when we pass a url to the image in, it loads it onto the screen at the click of a button.
//lets see if we can start to slap a translation over it.

let effect = "Evolve (1): Evolve this follower."
let name = "Bunny & Baron, Specter Duo"
let attr = "Frontier / Thief"
let img = "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP11/bp11-019.png"

let effect2 = "Evolve (1): Evolve this follower."
let name2 = "Drache, Fiery Dragonlord"
let attr2 = "Frontier / Dragonewt / Draconic Duelist"
let img2 = "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP13/bp13-054.png"

let effect3 = "Fanfare Search your deck for a Swordcraft card that costs 1 play point and put it into your EX area. \n\nActivate 0PP: Select an enemy follower on the field and engage it. Until the end of its controller’s next turn, that follower is Boxed. Activate only once per turn. (Boxed followers lose all abilities and are unable to refresh at the start of the turn.)"
let name3 = "Nahtnaught, Cursed Queen"
let attr3 = "Frontier / Commander"
let img3 = "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP11/bp11-018.png"

generateCard = (url) => {
    
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = ""
    card.style.backgroundImage = "url(" + url + ")"
    return card
}

generateText = (card, name, effect, attr) => {
    let nameBox = document.createElement("div")
    let effectBox = document.createElement("div")
    let attrBox = document.createElement("div")

    nameBox.classList.add("card-name")
    nameBox.textContent = name
    card.appendChild(nameBox)

    effectBox.classList.add("card-effect")
    effectBox.textContent = effect
    card.appendChild(effectBox)

    attrBox.classList.add("card-attr")
    attrBox.textContent = attr
    card.appendChild(attrBox)
}

document.getElementById("generate-card").addEventListener("click", function(e){
    let cardList = document.getElementById("card-list")

    let card1 = generateCard(img)
    generateText(card1, name, effect, attr)
    cardList.appendChild(card1)

    let card2 = generateCard(img2)
    generateText(card2, name2, effect2, attr2)
    cardList.appendChild(card2)

    let card3 = generateCard(img3)
    generateText(card3, name3, effect3, attr3)
    cardList.appendChild(card3)
}) 