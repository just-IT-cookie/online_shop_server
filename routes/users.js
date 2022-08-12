const express = require("express")
const router = express.Router()
const Users = require("./../Database/users")
const { jwtsecret } = require("./../config/jwt")
const jwt = require("jsonwebtoken")
const passport = require("passport")

router.get('/get_user_info', passport.authenticate('jwt', {session: false}), async(req,res) => {
  try {
    let user = await Users.findOne(req.body)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
})

router.put('/edit_user', passport.authenticate('jwt', {session: false}), async(req,res) => {
  try {
    // code...
  } catch (err) {
    // code...
  }
})

router.post('/create_user', async(req,res) => {
  try {
    let user = await Users.create(req.body)
    const payload = {
      sub: user._id,
      username: user.name,
      permissions: user.permissions
    }
    const token = jwt.sign(payload, jwtsecret)
    res.send("Bearer " + token)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
})

module.exports = router;