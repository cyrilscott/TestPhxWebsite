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
















// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl
//     console.log(query)
//     if (pathname === '/api/login') {
//         if (req.method !== 'POST') {
//             return res.status(400).send('Invalid HTTP method');
//           }
//     } 
//     // else if (pathname === '/b') {
//     //   app.render(req, res, '/b', query)
//     // } else {
//     //   handle(req, res, parsedUrl)
//     // }
//   }).listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })

