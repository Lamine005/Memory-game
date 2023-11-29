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
function createBoard(){
    for(let i=0; i<CardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-img',i)
        gridDisplay.appendChild(card)
    }
}