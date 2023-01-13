let creditCardsBox = document.querySelector('.credit_cards')

const cardArray =[
    './images/creditCards/amex.png',
    './images/creditCards/apple.png',
    './images/creditCards/google.png',
    './images/creditCards/maestro.png',
    './images/creditCards/mastercard.png',
    './images/creditCards/paypal.png',
    './images/creditCards/visa.png'
]

window.onload = ()=> {
    cardArray.forEach((card)=>{
        

        const cardImg = document.createElement('img')
        cardImg.setAttribute('alt', 'credit card')
        cardImg.setAttribute('src', card)

        creditCardsBox.appendChild(cardImg)
        console.log(cardImg);
    })
}

console.log(cardArray.length );