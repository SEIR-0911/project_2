const { Schema } = require('mongoose')
const goalSchema = new Schema (
   {
      title: { type: String, required: true },
      level: { type: String, required: true },
      confirm: { type: Boolean, required: true }
   },

   { timestamps: true })

   module.exports = goalSchema