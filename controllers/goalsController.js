const { Goal } = require('../models')


async function getAllGoals(req, res) {
   try {
      const goals = await Goal.find()
      res.json(goals)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

async function getOneGoal(req, res) {
   try {
      const id = req.params.id
      const goal = await Goal.findById(id)     
      if (goal) {
         return res.json(goal)
      }
      return res.status(404).send('Goal cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

async function createGoal(req, res) {
   try{
   const goal = await new Goal(req.body)
   console.log(req.body)
   await goal.save()
   // res.redirect?
   return res.status(201).json({
      goal
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

async function updateGoal(req, res) {
   try {
      let id = req.params.id
      let goal = await Goal.findByIdAndUpdate(id, req.body, { new: true })
      if (goal) {
         return res.status(200).json(goal)
      }
      throw new Error('Goal not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

async function deleteGoal(req, res) {
   try {
      const id = req.params.id
      let goal = await Goal.findByIdAndDelete(id)
      if (goal) {
         return res.status(200).json(goal)
      }
      throw new Error('Goal not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

module.exports = {
   getAllGoals,
   getOneGoal,
   createGoal,
   updateGoal,
   deleteGoal
}
