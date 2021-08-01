// BACKEND CODE FOR SERVING THE DIST FILES

const express = require('express')
const app = express()
const path = require('path')
const serveStatic = require('serve-static')


// serve files from our dist diretory containing our index.html file
app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log(`Listening on the port :: ${port}`)
// "start": "node server.js"