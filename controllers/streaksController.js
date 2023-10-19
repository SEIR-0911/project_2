const { Streak } = require('../models')

const getAllStreaks = async (req, res) => {
   try {
      const streaks = await Streak.find({})
      res.json(streaks)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneStreak = async (req, res) => {
   try {
      const { name } = req.params
      console.log(name)
      const streak = await Streak.findOne({name: name})
   
      console.log(streak)
      if (streak) {
         return res.json(streak)
      }
      return res.status(404).send('Streak cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const createStreak = async (req, res) => {
   try{
   const streak = await new Streak(req.body)
   await streak.save()
   return res.status(201).json({
      streak,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateStreak = async (req, res) => {
   try {
      let id = req.params.id
      let streak = await Streak.findByIdAndUpdate(id, req.body, { new: true })
      if (streak) {
         return res.status(200).json(streak)
      }
      throw new Error('Streak not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const deleteStreak = async (req, res) => {
   try {
      const id = req.params.id
      let streak = await Streak.findByIdAndDelete(id)
      if (streak) {
         return res.status(200).json(streak)
      }
      throw new Error('Streak not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}


module.exports = {
   getAllStreaks,
   getOneStreak,
   createStreak,
   updateStreak,
   deleteStreak
}