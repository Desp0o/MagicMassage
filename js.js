const creditCardsBox1 = document.getElementById('card1')
const creditCardsBox2 = document.getElementById('card2')
const creditCardsBox3 = document.getElementById('card3')

// card images array
const cardArray =[
    './images/creditCards/amex.png',
    './images/creditCards/apple.png',
    './images/creditCards/google.png',
    './images/creditCards/maestro.png',
    './images/creditCards/mastercard.png',
    './images/creditCards/paypal.png',
    './images/creditCards/visa.png'
]

// make card image div
function makeCreditCardBox(cardbox){
    cardArray.forEach((card)=>{
        const cardImg = document.createElement('img')
        cardImg.setAttribute('alt', 'credit card')
        cardImg.setAttribute('src', card)

        cardbox.appendChild(cardImg)
        console.log(cardImg);
    })
}

window.onload = ()=> {
    makeCreditCardBox(creditCardsBox1)
    makeCreditCardBox(creditCardsBox2)
    makeCreditCardBox(creditCardsBox3)
}
