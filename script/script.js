var inputVal = $('#formField').val()
var todoList = $('.todolist');


var todos = [];
function createTodo(item){
// Return a todo object
}

function removeTodo(){
    // Remove todo from todos at index
    var tos =  $(".tos")
    $('.delete').click(function (e) { 
    e.preventDefault();
   
 
    if (e.target.tagName === 'SPAN'){
        $(e.target).closest('li').hide(400);
       };
    
});
    
}

function done(){
    $('.todolist').click(function (e) { 
      e.preventDefault();
      if (e.target.tagName === 'LI'){
        $(e.target).toggleClass('checked');
       };
      
  });
}
done()
function addTodo(todo){
//Add todo to todos

todos.unshift($('#formField').val())
}

function renderTodos(){
    $('.todolist').prepend(`<li class="tos"> ${$('#formField').val()}<span class="delete"> X </span> </li>`);
    $('#formField').val("")
}

$('#subBut').click(function (e) { 
    // done();
    addTodo(inputVal);
    renderTodos()
    removeTodo()
});