const bodyParser = require('body-parser')
const todoController = {}

const items = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick ass'}]
const urlencodedParser = bodyParser.urlencoded({extended: false})

//referenced youtube videos
module.exports = function (app) {

app.get('/todo', function(req,res){
  res.render('todo', {todos: data})

})
app.post('/todo', urlencodedParser, function(req,res){
  data.push(req.body)
  res.json(data)
})
// app.edit('/todo', function(req,res){

// })
app.delete('/todo/:task', function(req,res){
  data = data.filter(function(todo){
    return todo.item.repace(/ /g, '-') !== re.params.item
  })
  res  .json(items)

})
}

