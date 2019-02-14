var inputVal = $('#formField').val()
var todoList = $('#todolist');


var todos = [];
function createTodo(item){
// Return a todo object
}

function removeTodo(index){
    // Remove todo from todos at index
}

function addTodo(todo){
//Add todo to todos

todos.unshift($('#formField').val())
}

function renderTodos(){
    $('.todolist').prepend(`<li> ${$('#formField').val()}<span class delete> X </span> </li>`);
}

$('#subBut').click(function (e) { 
    
    addTodo(inputVal);
    renderTodos()
    
});