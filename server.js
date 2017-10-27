const express = require('express')
const path = require('path')

const todoController = require('./controllers/todo-controller')

const app = express()

app.set('view engine', 'ejs')


app.use('/assets', express.static('./public'))

todoController(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
