window.addEventListener('load',()=>{
  const cardArray=[
    {name:'Fries', image:'./images/fries.png'}, {name:'Fries', image:'./images/fries.png'},
    {name:'Cheeseburger', image:'./images/cheeseburger.png'}, {name:'Cheeseburger', image:'./images/cheeseburger.png'},
    {name:'Hotdog', image:'./images/hotdog.png'}, {name:'Hotdog', image:'./images/hotdog.png'},
    {name:'Ice-cream', image:'./images/ice-cream.png'}, {name:'Ice-cream', image:'./images/ice-cream.png'},
    {name:'Milkshake', image:'./images/milkshake.png'}, {name:'Milkshake', image:'./images/milkshake.png'},
    {name:'Pizza', image:'./images/pizza.png'}, {name:'Pizza', image:'./images/pizza.png'}
  ]
  cardArray.sort(()=>0.5-Math.random())
  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  let cardChosen = []
  let cardChosenId = []
  let cardsWon = 0

  function cardBoard(){
    for(let i=0;i<cardArray.length;i++){
      let card = document.createElement('img')
      card.setAttribute('src', './images/blank.png')
      card.setAttribute('id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  function flipcard(){
    let cardId = this.getAttribute('id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].image)
    if (cardChosen.length==2){
      setTimeout(cheackForMatch, 300)
    }
  }
  
  function cheackForMatch(){
    let cards = document.querySelectorAll('img')
    let optionOneId = cardChosenId[0]
    let optionTwoId = cardChosenId[1]
    if (cardChosen[0]==cardChosen[1]){
      //alert('You found a match')
      cards[optionOneId].setAttribute('src', './images/white.png')
      cards[optionTwoId].setAttribute('src', './images/white.png')
      cardsWon ++
      result.innerHTML=cardsWon
      if (cardsWon==cardArray.length/2){
        alert('You found all the cards')
      }
    }else{
      //alert('Sorry tyr angain')
      setTimeout(()=>{
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
      }, 500)
    }
    cardChosen = []
    cardChosenId = []
  }

  cardBoard()
})