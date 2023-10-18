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
         level: 'Easy (50pts)',
         confirm: true,
      },
      {
         title: 'Eat healthy',
         level: 'Hard (150pts)',
         confirm: true,
      },
      {
         title: 'No alcohol',
         level: 'Hard (150pts)',
         confirm: true,
      },
      {
         title: 'Walk the dog',
         level: 'Medium (100pts)',
         confirm: true,
      },
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