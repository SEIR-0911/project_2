const { Goal } = require('../models')

const getAllGoals = async (req, res) => {
   try {
      const goals = await Goal.find({})
      res.json(goals)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneGoal = async (req, res) => {
   try {
      const { name } = req.params
      console.log(name)
      const goal = await Goal.findOne({name: name})
      .populate('goals')
      .exec()
      console.log(goal)
      if (goal) {
         return res.json(goal)
      }
      return res.status(404).send('Goal cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const createGoal = async (req, res) => {
   try{
   const goal = await new Goal(req.body)
   await goal.save()
   return res.status(201).json({
      goal,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateGoal = async (req, res) => {
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

const deleteGoal = async (req, res) => {
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