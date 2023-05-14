// const Router = require("./Router/index.js")
// const Application = require('./Application/index.js')
// const usersMap = require("./users.js")
// const ParseJson = require('./ParseJson/index.js')

// const router = new Router();
// const app = new Application()
// const PORT = process.PORT || 5000

// app.use(ParseJson)

// router.get('/users', (req, res) => {
//   res.send(usersMap)
// })

// router.post('/users', (req, res) => {
//   const user = req.body;
//   usersMap.push(user)
//   res.send(user)
// })


// app.addRouter(router)

// app.listen(PORT, () => console.log(`Server has opened by ${PORT} PORT`))
// -------------------------------------
// const http = require("http")
// const path = require('path')
// const fs = require('fs')
// const { encode } = require("punycode")

// const server = http.createServer((req, res) => {
//   const html = fs.readFileSync(path.resolve(__dirname, 'site/index.html'), {encoding: 'utf-8'}, (err) => console.log('readFile - error')) 
//   res.end(html)
// })

// server.listen(3000, () => {
//   console.log("server was started")
// })
// --------------------------------------------

const express = require('express')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'site/index.html'))

app.use(express.static('public'))

app.listen(port, console.log('server started'))