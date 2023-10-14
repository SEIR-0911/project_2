const mongoose = require('mongoose')

mongoose
   .connect('mongodb://127.0.0.1:27017/habitsDatabase',
   {

   })
   .then(() => {
      console.log('Successfully connected to MongoDB.')
   })
   .catch(e => {
      console.error('Conncetion error', e.message)
   })

   const db = mongoose.connection
   module.exports = db