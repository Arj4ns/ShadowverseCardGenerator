//passing in like a billion things
//maybe worth splitting it into seperate functions
//lets just try to load an image for now though


//so we have it set that when we pass a url to the image in, it loads it onto the screen at the click of a button.
//lets see if we can start to slap a translation over it.
let card1 = {
    effect: "Fanfare Search your deck for a Swordcraft card that costs 1 play point and put it into your EX area. \nActivate 0PP: Select an enemy follower on the field and engage it. Until the end of its controller’s next turn, that follower is Boxed. Activate only once per turn. (Boxed followers lose all abilities and are unable to refresh at the start of the turn.)",
    name: "Nahtnaught, Cursed Queen",
    attr: "Frontier / Commander",
    img: "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP11/bp11-018.png"
}

let card2 = {
    effect: "Fanfare Put 2 Fox of Invitation tokens in your EX area. \nActivate Engage this card, bury this card: Summon a Fox of Invitation token from your EX area. Activate only if there is a Zealot follower that costs at least 2 on your field.",
    name: "Chamber of Cleansing",
    attr: "Festive / Zealot",
    img: "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP14/bp14-094.png"
}

let card3 = {
    effect: "If there are at least 5 Machina cards in your cemetery, search your deck for a Machina follower that originally costs 3 or less and a Runecraft spell that originally costs 1. Put the follower onto your field and the spell into your EX area.",
    name: "Sorcery in Solidarity",
    attr: "Machina / Mage / Golem",
    img: "https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/BP12/bp12-041.png"
}

generateCard = (url) => {
    
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = ""
    card.style.backgroundImage = "url(" + url + ")"
    return card
}

generateCard = (cardStats) => {
    let cardList = document.getElementById("card-list")

    //make initial card object, and set the card image as its background
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = ""
    card.style.backgroundImage = "url(" + cardStats.img + ")"

    let nameBox = document.createElement("div")
    let effectBox = document.createElement("div")
    let attrBox = document.createElement("div")

    //make box for card name 
    nameBox.classList.add("card-name")
    nameBox.textContent = cardStats.name
    card.appendChild(nameBox)

    //make box for card effect
    effectBox.classList.add("card-effect")
    effectBox.textContent = cardStats.effect
    card.appendChild(effectBox)

    //make box for card attributes
    attrBox.classList.add("card-attr")
    attrBox.textContent = cardStats.attr
    card.appendChild(attrBox)

    cardList.appendChild(card)
}


document.getElementById("generate-card").addEventListener("click", function(e){
    
    generateCard(card1)
    generateCard(card2)
    generateCard(card3)
}) 