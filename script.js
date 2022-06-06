const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener ("click" , function (){
        const imageId = card.getAttribute("id")
        const title = card.querySelector('.title_recipe').innerText // atribui o texto que contém 
        const author = card.querySelector('.card_chef').innerText


        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/assets/${imageId}`
        modalOverlay.querySelector('.title-modal').innerHTML = `${title}`
        modalOverlay.querySelector('.chef-modal').innerHTML = `${author}`
        modalOverlay.querySelector('.buttonfeedback').innerHTML = `Adicionar Feedback`
        modalOverlay.querySelector('').innerHTML = `${imageId}`    
    })
}

const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener("click", function (){
    modalOverlay.classList.remove('active') 
    modalOverlay.querySelector('img').src = ""
})

