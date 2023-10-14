const mongoose = require('mongoose')
const calenderSchema = require('./calender')
const goalSchema = require('./goals')
const habitSchema = require('./habit')
const trophySchema = require('./trophy')

const Calender = mongoose.model('Calender', calenderSchema)
const Goal = mongoose.model('Goal', goalSchema)
const Habit = mongoose.model('Habit', habitSchema)
const Trophy = mongoose.model('Trophy', trophySchema)

module.exports = {
   Calender,
   Goal,
   Habit,
   Trophy
}