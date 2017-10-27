$(document).ready(function() {

  $('form').on$('submit', function() {

    const item = $('form input')
    const todo = {item: item.val()}

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      sucess: function(data){

        location.reload()
      }
    })

    return false
  })

  $('li').on('click', function(){
    const task = $(this).text().replace(/ /g, "-")
    $.ajax({
      type: 'DELETE'
      url: '/todo/' + task,
      sucess: function(data) {

        location.reload()
      }
    })
  })
})
