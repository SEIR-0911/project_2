const db = require('../db')
const { Streak, Goal, User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


   const streaks = [
      {
         title: 'Make bed',
         description: 'Days in a row that you finished this task.',
         streak: 1
      }
   ]

   const users = [
      {
         name: 'User',
         age: 33,
         email: 'test@test.com'
      }
   ]


   const goals = [
      {
         title: 'Go to bed early',
         level: 'Easy 50 pts'     
      },
      {
         title: 'Eat healthy',
         level: 'Medium 100 pts'
      },
      {
         title: 'No alcohol',
         level: 'Hard 150 pts'
      }
   ]

   await Streak.insertMany(streaks)
   console.log('created Streak')
   
   await User.insertMany(users)
console.log('created User')

   await Goal.insertMany(goals)
console.log('created Goal')
}


const run = async () => {
   await main()
   db.close()
}

run()