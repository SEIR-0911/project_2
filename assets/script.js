const Btn_Dialog  = document.querySelector('#bt-open-dialog')
const modalDialog = document.querySelector('#modal-dialog')
const modalForm   = modalDialog.querySelector('form')
const displayArea = document.querySelector('#newTiles')


Btn_Dialog.onclick = () => {
  modalDialog.returnValue = null
  modalDialog.showModal()
  }

modalForm.btCancel.onclick = () => {
  modalDialog.close()
  }
modalDialog.onclose = () => {
  console.clear();
  if ( modalDialog.returnValue === 'OK' ) {
  const formData = new FormData(modalForm)
  const formObject = Object.fromEntries(formData)
   axios.post('http://localhost:3001/goals', formObject)
   .then(response => {
      console.log('Quotas created:', response.data)
      displayArea.innerHTML = `New goal: ${JSON.stringify(response.data)}`
   })
   .catch (error => {
      console.error('Error sending data to backend:', error)
   })
} else {
   console.log('Goal does not exsist!')
}
}

