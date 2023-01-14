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
    })
}

window.onload = ()=> {
    makeCreditCardBox(creditCardsBox1)
    makeCreditCardBox(creditCardsBox2)
    makeCreditCardBox(creditCardsBox3)
}



const Accordion = document.querySelectorAll('.accordionElement')
const answer = document.querySelectorAll('.accordionElement1_answer')
const arrow = document.querySelectorAll('.FAQ_arrow')



answer[0].classList.add('accordionElement1_answer_active')
arrow[0].classList.add('FAQ_arrow_active')

Accordion.forEach(function(accordionItem){
    console.log(accordionItem)
    accordionItem.addEventListener('click', toggleAnswer)
    accordionItem.addEventListener('click', toggleArrow)
})

function toggleArrow(e){
    
    arrow.forEach(function(arrow){
        
        if(arrow.parentElement === e.target){
            
            arrow.classList.toggle('FAQ_arrow_active')
        }else{
            arrow.classList.remove('FAQ_arrow_active')
        }
    })

    
}

function toggleAnswer(e){
    answer.forEach(function(contetn){

        if(contetn.previousElementSibling === e.target){
            
            contetn.classList.toggle('accordionElement1_answer_active')
        }else{
            contetn.classList.remove('accordionElement1_answer_active')
        }
    })
}

