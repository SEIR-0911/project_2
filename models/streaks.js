const { Schema } = require('mongoose')
const streakSchema = new Schema (
   {
      title: { type: String, required: true },
      description: { type: String, required: true },
      streak: { type: Number, required: true }
   },

   { timestamps: true })

   module.exports = streakSchema