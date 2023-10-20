const mongoose = require('mongoose')
const streakSchema = require('./streaks')
const goalSchema = require('./goals')
const userSchema = require('./user')

const Streak = mongoose.model('Streak', streakSchema)
const Goal = mongoose.model('Goal', goalSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
   Streak,
   Goal,
   User
}