const User = require('../../model')
const mongoose = require('mongoose')
const argon2 = require('argon2')
const passport = require('passport')
import { withIronSession } from "next-iron-session";


try { //connecting to the db
  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
} catch (error) {
  console.log(error)
}


async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).send('Invalid HTTP method'); // if its not a POST return a 404 page
  }
  let parsedReq = JSON.parse(req.body)
  let passHash //declare variable outside of the scope
  try {
    passHash = await argon2.hash(parsedReq.password); // try to hash the password
  } catch (err) { //catch error
    console.log(err)
  }
  const response = await User.findOne({ username: parsedReq.username })//check if there is a valid username in the DB
  if (response != null) { //if there is then verify the hash, and return the username
    try {
      if (await argon2.verify(response.password, parsedReq.password)) {
        req.session.set('user', {
          username: parsedReq.username,
          email: response.email,
          id: response.id,
          dateCreated: response.dateCreated
        })
        await req.session.save()
        res.status(200)
        res.json({ status: response.username.toString() })
      }
    } catch (err) {
      console.log(err)
    }
  } else { //if not return incorrect
    res.status(403)
    res.json({ status: 'incorrect' })
  }
}

export default withIronSession(handler, {
  password: "KWE2VFVVCH9b1HpwBgghRzuEoinCHy2sN5RR0GiV",
  cookieName: "PHXSession",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  }
})