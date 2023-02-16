 let player = {
    name :  " ",
    chips : 195
 }

 let cards = []
 let sum = 0;
 let  hasBlackJack = false;
 let isAlive = false
 let message = "";
 let sumEl = document.getElementById("sum-el")
 let messageEl = document.getElementById("message-el")
 let cardseL = document.getElementById("cards-el")
 let newCardEl = document.getElementById("newcard-el")
 let startEl= document.getElementById("start-el")
 let playerEl = document.getElementById("player-el")


 function reload() {
    location.reload()
 }


 function generateCard() {
    let rando = Math.floor(Math.random() * 13 + 1)
    if (rando > 10) {
        return 10
    } else if(rando === 1) {
        return 11
    } else {
        return rando
    }
 }


 function startGame() {
    isAlive = true
     let firstCard = generateCard()
     let secondCard = generateCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard
     renderGame()
 }

 function renderGame() {
     if (sum <= 20) {
         message = "do you want to pick another card?"
      } else if (sum === 21) {
          message = "YOU'VE GOT BLACKJACK!!!"
          hasBlackJack = true
      } else {
          message = "Bummer, You're out of the game"
          setTimeout(reload, 2000);
          isAlive = false
      }
     
      messageEl.textContent = message;

      sumEl.textContent = "sum: " + sum;

        cardseL.textContent = "your hand: " 
        for(let i = 0; i < cards.length; i++) {
        cardseL.textContent += cards[i] + " "
        }

     playerEl.textContent = player.name  + ": $"+  player.chips ;
     
 }


 function newCard() {
    if (isAlive === true  && hasBlackJack === false){
        let thirdCard = generateCard();
        sum += thirdCard
        cards.push(thirdCard);
        renderGame()
    }
   
 }