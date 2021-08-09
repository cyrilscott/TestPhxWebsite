const express = require('express')
const next = require('next')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleNextRequest = app.getRequestHandler();


app.prepare().then(() => {
    const server = express()
    server.disable('x-powered-by')
    server.get('*', handleNextRequest)
    server.post('*', handleNextRequest)
    server.listen(80, () => {
        console.log(`Example app listening at http://localhost`)
      })
})
