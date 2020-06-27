/* global $*/
$(document).ready(()=>{
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch((err)=>{
        console.log(err);
    });
    
    $("#todoInput").keypress((event)=>{
        if (event.which == 13) 
            createTodo();
    });
    
    $(".list").on("click", "li", function(){
        updateTodo($(this));
    });
    
    $(".list").on("click", "span", function(e){
        e.stopPropagation();
        removeTodo($(this).parent());
    });
});


function removeTodo(todo){
    let clickedId = todo.data("id");
    let deleteUrl = "/api/todos/" + clickedId;
    $.ajax({
        method: "DELETE",
        url: deleteUrl
    })
    .then((data)=>{
        todo.remove();
    })
    .catch((err)=>{
        console.log(err);
    });
}


function addTodo(todo){
    let newTodo = $('<li class="task">' 
        + todo.name + "<span>X</span></li>");
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if (todo.completed) 
        newTodo.addClass("done");
    $(".list").append(newTodo);
}



function addTodos(todos) {
    // add todos to page here
    todos.forEach((todo)=>{
       addTodo(todo);
    });
}



function createTodo() {
    // send request to create new todo
    let usrInput = $("#todoInput").val();
    $.post("/api/todos", {name : usrInput})
    .then((newTodo)=>{
        addTodo(newTodo);
        $("#todoInput").val("");
    })
    .catch((err)=>{
        console.log(err);
    });
}



function updateTodo(todo){
    let updateUrl = "/api/todos/" + todo.data("id");
    let isDone = !todo.data("completed");
    let updateData = {completed: isDone};
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
    .then((updatedTodo)=>{
        todo.toggleClass("done");
        todo.data("completed", isDone);
    });
}