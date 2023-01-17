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


const accordion = document.querySelectorAll('.accordionElement')
const answer = document.querySelectorAll('.accordionElement1_answer')
const arrow = document.querySelectorAll('.FAQ_arrow')




answer[0].classList.add('accordionElement1_answer_active')
arrow[0].classList.add('FAQ_arrow_active')



accordion.forEach((accordions) => {
    accordions.addEventListener("click", () => {

      if (!accordions.lastElementChild.classList.contains("accordionElement1_answer_active")) {
            accordion.forEach((a) => a.lastElementChild.classList.remove("accordionElement1_answer_active"));
            accordions.lastElementChild.classList.add("accordionElement1_answer_active");
      } else {
        accordions.lastElementChild.classList.remove("accordionElement1_answer_active");
      }
    });
  });



// ტექსტის ცვლილება
if(window.innerWidth < 769){
    document.getElementById('service_block_txt1').innerHTML = 'FREE 2-DAY USA SHIPPING'
    document.getElementById('service_block_txt3').innerHTML = '100% MONEY-BACK GUARANTEE'
}



//////////////////////////////////
const slider = document.querySelector('.customers_block')
let startX = 0
let pressed = false

slider.addEventListener('mousedown', function(e){
  pressed = true
  startX =  e.clientX

  console.log(startX);
})

window.addEventListener('mouseup',function(e){
  pressed = false

})

slider.addEventListener('mouseleave', function(e){
  pressed = false

  console.log(pressed);
})

slider.addEventListener('mousemove', function(e){
  if(!pressed){
    return
  }

  wrapper.scrollLeft += startX - e.clientX
})