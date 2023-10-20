const { Schema } = require('mongoose')
const userSchema = new Schema (
   {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      email: { type: String, required: true }
   },

   { timestamps: true })

   module.exports = userSchema