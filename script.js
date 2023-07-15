const playBtn = document.getElementById("play-btn")
const message = document.getElementById("message-id")
const sumOfCards = document.getElementById("sum-id")
const cardsDrawn = document.getElementById("cards-id")
const newCardBtn = document.getElementById("newCard-btn")
const resetBtn = document.getElementById("reset-btn")
const cardsPara = document.getElementById("cards-para")
const helpBtn = document.getElementById("help-btn")
const helpPara = document.getElementById("help-para")

let gotblackjack = false
let isAlive = false
let cardsArray = []
let sum = 0;
function randonCardgenerator() {
    randomCard = Math.floor(Math.random()*13 + 1)
    return randomCard
}

function startGame() {
        isAlive = true
        gotblackjack = false
        let firstCard = randonCardgenerator();
        let secondCard = randonCardgenerator();
        cardsArray = [firstCard, secondCard]
        sum = firstCard + secondCard
        sumOfCards.textContent = "Total Sum : " + sum;
        cardsDrawn.textContent = "Cards Drawn : "
        for (i=0; i<cardsArray.length; i++) {
            cardsDrawn.textContent += cardsArray[i] + " "
        }
        gameProcessing()
    
}
function gameProcessing() {
    message.style.color = "white"
        if(sum > 21){
            message.style.color = "red"
            message.textContent = `You lost as total sum exceeded 21. .....Try again ......`
            isAlive = false
        }
        else if(sum < 21){
            message.textContent = `You were close. Do you want to draw another card ?`
    
        }
        else{
            message.style.color = "lime"
            message.textContent = `Hurrayyyy, Congratulations!! You got the BlackJack `
            gotblackjack = true;
        }

}

playBtn.addEventListener("click", startGame)

function newCard() {
    if( isAlive === true && gotblackjack === false)
    {
        let nextCard = randonCardgenerator();
        sum += nextCard;
        cardsArray.push(nextCard)
        console.log(cardsArray)
        sumOfCards.textContent = ` Total Sum :  ${sum} `
        cardsDrawn.textContent += ` ${nextCard} `
        gameProcessing();
    }
}

newCardBtn.addEventListener("click", newCard)

function resetGame() {
    cardsDrawn.textContent = "Cards Drawn : "
    sumOfCards.textContent = "Total Sum : "
    message.textContent = "Want to play the BlackJack game ?"
    message.style.color = "white"
    helpPara.textContent = ""
    isAlive = false
    gotblackjack = false

}
resetBtn.addEventListener("click", resetGame)


function help() {
    helpPara.innerHTML = `-- Each card has a value from 1-13. <br>
    -- Two Random will be drawn, and if their sum exceeds 21 then you lose.<br>
    -- If the sum is below 21 then you can draw another card. <br>
    -- And if sum is exactly 21 then you win, means you get the blackJack `

}

helpBtn.addEventListener("click", help)