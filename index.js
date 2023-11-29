const CardArray = [
    {
        name:'fries',
        img:'images/fries.png'
    },{
        name:'hotdog',
        img:'images/hotdog.png'
    },{
        name:'ice-cream',
        img:'images/ice-cream.png'
    },{
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },{
        name:'milkshake',
        img:'images/milkshake.png'
    },{
        name:'pizza',
        img:'images/pizza.png'
    },{
        name:'fries',
        img:'images/fries.png'
    },{
        name:'hotdog',
        img:'images/hotdog.png'
    },{
        name:'ice-cream',
        img:'images/ice-cream.png'
    },{
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },{
        name:'milkshake',
        img:'images/milkshake.png'
    },{
        name:'pizza',
        img:'images/pizza.png'
    }
    
]

CardArray.sort(()=> 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
let cardChosen = [];
let cardsChosenIds = [];
const cardWon = [];
resultDisplay = document.querySelector('#result');

function createBoard(){
    for(let i=0; i<CardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        gridDisplay.appendChild(card)
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0];
    const optiontwoId = cardsChosenIds[1];

    console.log('checkMatch')

if(optionOneId == optiontwoId){
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optiontwoId].setAttribute('src','images/blank.png')
    alert("you clicked the same image")
}

    if(cardChosen[0]== cardChosen[1]){
        alert("you found a match")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optiontwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipcard)
        cards[optiontwoId].removeEventListener('click',flipcard)
        cardWon.push(cardChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optiontwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again')
    }
    cardChosen = []
    cardsChosenIds= []
    resultDisplay.textContent = cardWon.length

    if(cardWon.length == (CardArray/2)){
        resultDisplay.textContent = 'Congratulation Mate, you\'ve found them all'
    }
}

function flipcard(){
    const cardId = this.getAttribute('data-id');
    
    cardChosen.push(CardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',CardArray[cardId].img)
    if (cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }

}