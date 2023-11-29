const CardArray = [
    {
        name:'fries',
        img:'images/fries'
    },{
        name:'fries',
        img:'images/fries'
    },{
        name:'fries',
        img:'images/fries'
    },{
        name:'fries',
        img:'images/fries'
    },{
        name:'fries',
        img:'images/fries'
    },{
        name:'fries',
        img:'images/fries'
    }
]

CardArray.sort(()=> 0.5 - Math.random);
const gridDisplay = document.querySelector('#grid');
const cardChosen = [];

function createBoard(){
    for(let i=0; i<CardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.addEventListener('click',flipcard())
        card.setAttribute('data-img',i)
        gridDisplay.appendChild(card)
    }
}

createBoard();

function flipcard(){
    const cardId = this.getAttribute('data-id');
    
    cardChosen.push(CardArray[cardId].name)
    this.setAttribute('src',CardArray[cardId].img)

}