const figureChange = document.querySelector('#figure')
const firstCard = document.querySelector('.first-card')
const secondCard = document.querySelector('.second-card')
const bntRefresh = document.querySelector('.btn')
const changeMessage = document.querySelector('.title-to-change')

const messageFun = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", 
    "Boa sorte! ⭐", 
    "Sorte na vida é sentir a felicidade de viver cada momento.", 
    "Sorte é reconhecer as boas oportunidades e saber aproveitá-las. 🍀", "Minha sorte é ter o teu abraço como recompensa para toda espera.", 
    "Te desejo muita sorte!", 
    "Seja merecedor da sorte e ela virá até você!",
    "Sorte é o que acontece quando a capacidade encontra a oportunidade.", 
    "Sorte é o resultado de muito esforço, trabalho e dedicação.", 
    "Quando a sorte chega à sua casa, ofereça-lhe uma poltrona."
] 


figureChange.addEventListener('click', () => {
    let wordRandom = Math.floor(Math.random() * messageFun.length)
    let word = messageFun[wordRandom]

    firstCard.classList.add('hiden')
    secondCard.classList.remove('hiden')
    
    changeMessage.innerHTML = word 
})

bntRefresh.addEventListener('click', () => {
    firstCard.classList.remove('hiden')
    secondCard.classList.add('hiden')
})