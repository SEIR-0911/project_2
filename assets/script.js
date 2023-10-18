// ==== QUOTA COMPLETE VARIABLES ==== //
const doneBtn = document.querySelector('.doneBtn')
const doneBtn2 = document.querySelector('.doneBtn2')
const doneBtn3 = document.querySelector('.doneBtn3')

// ==== ADD-MODAL VARIABLES ==== //
const openButton = document.querySelector('[data-open-modal]')
const closeButton = document.querySelector('[data-close-modal]')
const modal = document.querySelector('[data-modal]')
const quickAddBtn = document.querySelector('data-quickAdd-button')
const customAddBtn = document.querySelector('data-customAdd-button')
const suggestionBtn1 = document.querySelector('data-suggestion1-button')
const suggestionBtn2 = document.querySelector('data-suggestion2-button')
const suggestionBtn3 = document.querySelector('data-suggestion3-button')
const suggestionBtn4 = document.querySelector('data-suggestion4-button')
const easyBtn = document.querySelector('data-easy-button')
const mediumBtn = document.querySelector('data-medium-button')
const hardBtn = document.querySelector('data-hard-button')
const addBtn = document.querySelector('data-add-button')


// ==== ADD-MODAL LOGIC ==== //

openButton.addEventListener('click', () => {
   modal.showModal()
})

closeButton.addEventListener('click', () => {
   modal.close()
})






// ==== QUOTA COMPLETE LOGIC ==== //
doneBtn.addEventListener('click', () => {
   let progress = document.getElementById('myBar')
   progress.value = progress.value + 50
})

doneBtn2.addEventListener('click', () => {
   let progress = document.getElementById('myBar')
   progress.value = progress.value + 100
})

doneBtn3.addEventListener('click', () => {
   let progress = document.getElementById('myBar')
   progress.value = progress.value + 150
})




