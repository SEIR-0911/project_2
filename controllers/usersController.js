const { User } = require('../models')

const getAllUsers = async (req, res) => {
   try {
      const users = await User.find({})
      res.json(users)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneUser = async (req, res) => {
   try {
      const { name } = req.params
      console.log(name)
      const user = await User.findOne({name: name})
      .populate('Users')
      .exec()
      console.log(user)
      if (user) {
         return res.json(user)
      }
      return res.status(404).send('User cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const createUser = async (req, res) => {
   try{
   const user = await new User(req.body)
   await user.save()
   return res.status(201).json({
      user,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateUser = async (req, res) => {
   try {
      let id = req.params.id
      let user = await User.findByIdAndUpdate(id, req.body, { new: true })
      if (user) {
         return res.status(200).json(user)
      }
      throw new Error('User not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const deleteUser = async (req, res) => {
   try {
      const id = req.params.id
      let user = await User.findByIdAndDelete(id)
      if (user) {
         return res.status(200).json(user)
      }
      throw new Error('User not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}


module.exports = {
   getAllUsers,
   getOneUser,
   createUser,
   updateUser,
   deleteUser
}