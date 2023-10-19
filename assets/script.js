// ==== QUOTA COMPLETE VARIABLES ==== //
// const doneBtn = document.querySelector('.doneBtn')
// const doneBtn2 = document.querySelector('.doneBtn2')
// const doneBtn3 = document.querySelector('.doneBtn3')

// ==== ADD-MODAL VARIABLES ==== //
const openButton = document.querySelector('[data-open-modal]')
const closeButton = document.querySelector('#cancel')
const modal = document.querySelector('#modal')
const outputBox = document.querySelector('output')
const inputEl = modal.querySelector('input')
const easyBtn = document.querySelector('data-easy-button')
const mediumBtn = document.querySelector('data-medium-button')
const hardBtn = document.querySelector('data-hard-button')
const addBtn = document.querySelector('#addBtn')
const createQuotaForm = document.getElementById('create-quota-form')
const createQuotaBtn = document.getElementById('addBtn')




// ==== ADD-MODAL LOGIC ==== //

openButton.addEventListener('click', () => {
   modal.showModal()
})

inputEl.addEventListener('change', (e) => {
   addBtn.value = inputEl.value
})

modal.addEventListener('close', (e) => {
   outputBox.value = modal.returnValue === "default" ? '' : `${modal.returnValue}`
})

addBtn.addEventListener('click', (e) => {
   e.preventDefault()
   modal.close(inputEl.value)
})

closeButton.addEventListener('click', () => {
   modal.close()
})

createQuotaBtn.addEventListener('submit', (e) => {
   e.preventDefault()
   console.log('working')
   let quotaData = {}
   // const formData = new FormData(createQuotaForm)
   // for (let [key, value] of formData.entries()) {
   //    console.log(key, value);
      quotaData[key] = value;
   //  }
   // console.log(formData)
})




// ==== QUOTA COMPLETE LOGIC ==== //
// doneBtn.addEventListener('click', () => {
//    let progress = document.getElementById('myBar')
//    progress.value = progress.value + 50
// })

// doneBtn2.addEventListener('click', () => {
//    let progress = document.getElementById('myBar')
//    progress.value = progress.value + 100
// })

// doneBtn3.addEventListener('click', () => {
//    let progress = document.getElementById('myBar')
//    progress.value = progress.value + 150
// })




