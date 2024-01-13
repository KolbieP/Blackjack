let sum = 0
let message = ""
let cards = []
let hasBlackJack = false
let isAlive = false
let player = {
    name: "Player 1",
    chips: 200
}

let messageEl = document.getElementById("message-el")
//This uses querySelector 
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let personEl = document.getElementById("player-el")

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        player.chips += 10
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 10
    }

    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.innerText = message
    personEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    } 
}

function getRandomCard() {
    let card = Math.floor((Math.random() * 13)) + 1;
    if (card === 1) {
        return 11
    }
    else if (card > 10) {
        return 10
    } else {
        return card
    }
}




