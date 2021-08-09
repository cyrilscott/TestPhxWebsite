const User = require('../../model')
const mongoose = require('mongoose')
const argon2 = require('argon2')

try {
    mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
} catch (error) {
    console.log(error)
}


export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).send('Invalid HTTP method');
    }
    (async () => {
        let parsedCredintals = JSON.parse(req.body)
        let hash
        try {
            hash = await argon2.hash(parsedCredintals.password);
        } catch (err) {
            console.log(err)
        }
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        let login = {
            username: parsedCredintals.username,
            password: hash,
            dateCreated: dateTime,
            email: parsedCredintals.email
        }
        try {
            let response = await User.create({ username: login.username, password: login.password, dateCreated: login.dateCreated, email: login.email })
            res.status(200)
            res.json({ status: login.username })
        } catch (error) {
            res.status(404)
            res.json({ status: error })
        }
    })()
}
