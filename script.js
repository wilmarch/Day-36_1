$(document).ready(function() {

// Function untuk menambahkan task ke dalam list
function addTask(taskText) {
    if (taskText.trim() !== '') {
      var newTask = $('<li class="list-group-item">' + taskText + '<button class="btn btn-sm btn-success float-end completeBtn">Complete</button><button class="btn btn-sm btn-danger float-end deleteBtn">Delete</button></li>');
      $('#taskList').append(newTask);
      newTask.hide().slideDown(); 
      $('#taskInput').val('');
    } else {
      alert("Please enter a task!"); 
    }
  }
  
// ketika button add task di klik
    $('#addTaskBtn').click(function() {
      var taskText = $('#taskInput').val();
      addTask(taskText);
    });
  
// ketika tombol enter di tekan
    $('#taskInput').keypress(function(event) {
      if (event.which === 13) {
        var taskText = $('#taskInput').val();
        addTask(taskText);
      }
    });
  
// Complete task
    $('#taskList').on('click', '.completeBtn', function() {
      $(this).parent('.list-group-item').toggleClass('bg-success text-white');
    });
  
// Delete task
    $('#taskList').on('click', '.deleteBtn', function() {
      var listItem = $(this).parent('.list-group-item');
      var confirmDelete = confirm("Are you sure you want to delete this task?");
      if (confirmDelete) {
        listItem.addClass('deleted');
        setTimeout(function() {
          listItem.remove();
        }, 750); 
      }
    });
});