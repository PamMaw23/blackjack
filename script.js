let cards = [0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ("")
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")
let player ={
    name : "Player",
    // chips : 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name  
// + ": $" + player.chips


function startGame(){
    isAlive = true
    let firstCard  = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl. textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You have lost!"
        isAlive = false
    }
    messageEl.textContent = message
    
    
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        console.log(cards)
        renderGame()
}
}

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if( randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }return randomNumber
}
// Cash Out!
// console.log(hasBlackJack)

