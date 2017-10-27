const express = require('express')
const path = require('path')
const logger = require('morgan')

const todoController = require('./controllers/todo-controller')

const app = express()

app.set('view engine', 'ejs')


app.use('/assets', express.static('./public'))
app.use(logger('dev'))
app.get('/',(req,res) => {
  res.send('hello')
})
//app.use('/*')


todoController(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
