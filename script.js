let deckObject = [
    {   
       // name: 'ace',
        img: './img/oneSpiders.png',
        value: 1

    },
    {
       // name: 'ace',
        img: './img/oneGhost.png',
        value: 1
    },
    {
       // name: 'oneBat'
        img: './img/oneBat.png',
        value: 1
    },
    {
       // name: 'oneGhost
        img: './img/oneSkull.png',
        value: 1
    }
    ,
    {
        img: './img/twoSpiders.png',
        value: 2
    },
    {
        img: './img/twoGhost.png',
        value: 2
    },
    {
        img: './img/twoBats.png',
        value: 2
    },
    {
        img: './img/twoSkulls.png',
        value: 2
    },
    {
        img: './img/threeSpiders.png', 
        value: 3
    },
    {
        img: './img/threeGhost.png',
        value: 3
    },
    {
        img: './img/threeBats.png',
        value: 3
    },
    {
        img: './img/threeSkulls.png',
        value: 3
    },
    {
        img: './img/fourSpiders.png',
        value: 4
    },
    {
        img: './img/fourGhost.png',
        value: 4
    },
    {
        img: './img/fourBats.png',
        value: 4
    },
    {
        img: './img/fourSkulls.png',
        value: 4
    },
    {
        img: './img/fiveSpiders.png',
        value: 5
    },
    {
        img: './img/fiveGhost.png',
        value: 5
    },
    {
        img: './img/fiveBats.png',
        value: 5
    },
    {
        img: './img/fiveSkulls.png',
        value: 5
    },
    {
        img: './img/sixSpiders.png',
        value: 6
    },
    {
        img: './img/sixGhost.png',
        value: 6
    },
    {
        img: './img/sixBats.png',
        value: 6
    },
    {
        img: './img/sixSkulls.png',
        value: 6
    },
    {
        img: './img/sevenSpiders.png',
        value: 7
    },
    {
        img: './img/sevenGhost.png',
        value: 7
    },
    {
        img: './img/sevenBats.png',
        value: 7
    },
    {
        img: './img/sevenSkulls.png',
        value: 7
    },
    {
        img: './img/eightSpiders.png',
        value: 8
    },
    {
        img: './img/eightGhost.png',
        value: 8
    },
    {
        img: './img/eightBats.png',
        value: 8
    },
    {
        img: './img/eightSkulls.png',
        value: 8
    },
    {
        img: './img/nineSpiders.png',
        value: 9
    },
    {
        img: './img/nineGhost.png',
        value: 9
    },
    {
        img: './img/nineBats.png',
        value: 9
    },
    {
        img: './img/nineSkulls.png',
        value: 9
    },
    {
        img: './img/tenSpiders.png',
        value: 10
    },
    {
        img: './img/tenGhost.png',
        value: 10
    },
    {
        img: './img/tenBats.png',
        value: 10
    },
    {
        img: './img/tenSkulls.png',
        value: 10
    }//,
    // {
    //     img: './img/jHearts.png',
    //     value: 10
    // },
    // {
    //     img: './img/jDiamonds.png',
    //     value: 10
    // },
    // {
    //     img: './img/jClubs.png',
    //     value: 10
    // },
    // {
    //     img: './img/jSpades.png',
    //     value: 10
    // },
    // {
    //     img: './img/qHearts.png',
    //     value: 10
    // },
    // {
    //     img: './img/qDiamonds.png',
    //     value: 10
    // },
    // {
    //     img: './img/qClubs.png',
    //     value: 10
    // },
    // {
    //     img: './img/qSpades.png',
    //     value: 10
    // },
    // {
    //     img: './img/kHearts.png',
    //     value: 10
    // },
    // {
    //     img: './img/kDiamond.png',
    //     value: 10
    // },
    // {
    //     img: './img/kClubs.png',
    //     value: 10
    // },
    // {
    //     img: './img/kSpades.png',
    //     value: 10
    //  }
]

let gameContainer = document.querySelector('#gameContainer')
let playerCardContainer = document.querySelector('#playerCardContainer');
let playerCard1 = document.querySelector('#playersCard1'); // playerCard[x] and dealerCard[y] are the div containers that hold the card images
let playerCard2 = document.querySelector('#playersCard2');
let playerCard3 = document.querySelector('#playersCard3');
let playerCard4 = document.querySelector('#playersCard4');
let playerCard5 = document.querySelector('#playersCard5');
let dealerCard1 = document.querySelector('#dealersCard1');
let dealerCard2 = document.querySelector('#dealersCard2');
let dealerCard3 = document.querySelector('#dealersCard3');
let dealerCard4 = document.querySelector('#dealersCard4');
let dealerCard5 = document.querySelector('#dealersCard5');
let yourHandDisplay = document.querySelector('#yourHandDisplay');
let allCards = document.querySelectorAll('.cards');
let playerWallet = document.querySelector('#yourWallet'); // This value will keep track of the score in units of dollars.
let dealerWallet = document.querySelector('#dealerWallet');
let hitButton = document.querySelector('#hitButton');
let stayButton = document.querySelector('#stayButton');
let popUp = document.querySelector('#messagePopUp'); 
let winLoseMessage = document.getElementById('winLoseMessage');
let message = document.createElement('p');
let tryAgainButton = document.querySelector('#tryAgain');
let playerHandArray = [];
let dealerHandArray = [];
let playerHandSum = 0;
let dealerHandSum = 0;
let hitCounter = 0;
let playerCash = 200;
let hideButton = document.querySelectorAll('.playerOptionButton');
let playersTurn = true;
let dealersTurn = false;
let continueGame = true;



function deal(){
    return deckObject[Math.floor(Math.random()*deckObject.length)];
}

function updateWallet(playerCash){

    playerWallet.innerText = `Your Wallet: $${playerCash}`;

}

function check(){

    playerHandSum = 0;
    dealerHandSum = 0;

    for(let i = 0; i < playerHandArray.length; i++){
        playerHandSum += playerHandArray[i];
    }
    yourHandDisplay.textContent = `Your Hand: ${playerHandSum}`;
    if(playersTurn){

        if(playerHandSum == 21){
            playerCash = playerCash + 100; 
            updateWallet(playerCash);
            console.log('21 You Win!')
            popUpMessage('21! You Win! ', 'green')
        //    reset(playerCash, dealerCash);
        // onStart(playerCash)
            //popUpPomptWin()
        }
        else if(playerHandSum < 21 && playerHandArray.length == 5){
            playerCash = playerCash + 100;
            updateWallet(playerCash);
            console.log('5 cards You win!')
            //reset(playerCash, dealerCash);
            popUpMessage('You got 5 cards without busting. You win!', 'green')
            //onStart(playerCash)
            //popUpPomptWin()
        }
        else if (playerHandSum > 21){
            playerCash = playerCash - 100
            updateWallet(playerCash);
            console.log('Busted You lose!')
            popUpMessage('You busted. You lose!', 'red')
            //reset(playerCash, dealerCash);
            //onStart(playerCash)
            //popUpPomptLose()
        }

    }

    else if(dealersTurn){
        
        for(let i = 0; i < dealerHandArray.length; i++){
            dealerHandSum += dealerHandArray[i];
            }
            console.log('dealer hand sum: ' + dealerHandSum)
            
        if(dealerHandSum == 21){
            playerCash = playerCash - 100;
            updateWallet(playerCash);
            console.log('21 Dealer wins');
            setTimeout(popUpMessage(`You lose! Your Hand: ${playerHandSum} Dealer Hand: ${dealerHandSum}`, 'red' ), 10000);
            return false;
            

        }
        else if(dealerHandSum > playerHandSum && dealerHandSum < 21){
            playerCash = playerCash - 100
            updateWallet(playerCash);
            console.log('dealer sum is greater. Dealer wins')
            setTimeout(popUpMessage(`You lose! Your Hand: ${playerHandSum} Dealer Hand: ${dealerHandSum}`, 'red'), 10000);
            return false;
            // reset(playerCash);
        }
        else if(dealerHandSum > 21){
            playerCash = playerCash + 100
            updateWallet(playerCash);
            console.log('dealer Busted');
            setTimeout(popUpMessage(`You Win! Your Hand: ${playerHandSum} Dealer Hand: ${dealerHandSum}`,'green'), 10000);
            return false;
        }
        else if( dealerHandArray.length == 5){
            playerCash = playerCash - 100;
            updateWallet(playerCash);
            console.log('dealer got 5 ]: Dealer wins')
            setTimeout(popUpMessage(`You lose! Your Hand: ${playerHandSum} Dealer Hand: ${dealerHandSum}`, 'red'), 10000);
            return false;
            // reset(playerCash);
        }
        else{
            return true;
        }
    }

}



function returnHome(){
    window.location = 'index.html'
}

function reset(){
console.log('--------------new game--------------')
    popUp.style.display = 'none';
    hitStayButton('inline-block');
    for(let i = 0; i < allCards.length; i++){
        allCards[i].style.backgroundImage = `url('./img/facedowncard.png')`;
    }
    playerHandArray = [];
    dealerHandArray = [];
    playerHandSum = 0;
    dealerHandSum = 0;
    
    if(playerCash <= 0){
        alert('You Lose the Game')
        returnHome()
    }
    onStart()
}

function flip(div, img){
    div.style.backgroundImage = `url('${img}')`;
}

function sum(handSum, newCard){
    return handSum += newCard;
}

function hitStayButton(noneOrInline){
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display = noneOrInline;
    }
}

function hit(){
 
    hitCounter++
    let dealtCard = deal();
    console.log('new Dealt card: '+ dealtCard.value)
    playerHandArray.push(dealtCard.value);
    playerHandSum = 0;
    for(let i = 0; i < playerHandArray.length; i++){
        playerHandSum += playerHandArray[i];
    }
console.log('sum: '+ playerHandSum);
    check()
   if(hitCounter == 3){

        flip(playerCard3, dealtCard.img)

   }
   else if(hitCounter == 4){

        flip(playerCard4, dealtCard.img)
     
    }
    else if(hitCounter == 5){

        flip(playerCard3, dealtCard.img)
         
    }


}

function hideHomepage(){    //1. This function runs when user clicks start on the homepage.
    let homepage = document.querySelector('#home-navigation');
    homepage.style.display = 'none';
    gameContainer.style.display = 'inline-block';
    onStart();  // 2. This function gets invoked.
}


function popUpMessage(message, color){
    popUp.style.display = 'inline-block';
    popUp.style.backgroundColor = color;
    winLoseMessage.textContent = message;
    hitStayButton('none');
    
}

function onStart(){
    hitCounter = 2;
    console.log(allCards)
    dealersTurn = false;
    playersTurn = true;
    let dealtCard1 = deal();
    let dealtCard2 = deal();
    playerHandArray.push(dealtCard1.value);
    playerHandArray.push(dealtCard2.value);
    flip(playerCard1, dealtCard1.img)
    flip(playerCard2, dealtCard2.img)
    yourHandDisplay.textContent = `Your Hand: ${dealtCard1.value + dealtCard2.value}`;
    console.log('card 1: ' + dealtCard1.value);
    console.log('card 2: '+ dealtCard2.value);
    
}

async function dealerTurn(){

    dealerHandSum = 0;
    playersTurn = false;
    dealersTurn = true;
    hitStayButton('none');

    let dealtCard1 = await deal();
    let dealtCard2 = await deal();
    dealerHandArray.push(dealtCard1.value);
    dealerHandArray.push(dealtCard2.value);
    console.log('dealer Card 1: ' + dealtCard1.value)
    console.log('dealer Card 2: ' + dealtCard2.value)
    await setTimeout(()=>{flip(dealerCard1, dealtCard1.img)}, 2000);
    await setTimeout(()=>{flip(dealerCard2, dealtCard2.img)}, 4000);
    if(check()){
        let dealtCard3 = await deal();
        await setTimeout(()=>{flip(dealerCard3, dealtCard3.img)}, 6000);
        dealerHandArray.push(dealtCard3.value)
        console.log('dealer card 3: ' + dealtCard3.value)
    
        if(check()){
            let dealtCard4 = deal();
            await setTimeout(()=>{flip(dealerCard4, dealtCard4.img)}, 8000);
            dealerHandArray.push(dealtCard4.value)
            console.log('dealer Card 4: ' + dealtCard4.value)
            
            if(check()){
                let dealtCard5 = deal();
                await setTimeout(()=>{flip(dealerCard5, dealtCard5.img)}, 10000);
                dealerHandArray.push(dealtCard5.value)
                console.log('dealer card 5: ' + dealtCard5.value)
                await check();
            }
        }
    }
}