// tasks.js #2
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');

    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

//Item Remove Function
function removeItem(){
    var task = document.getElementById('task');
    var output = document.getElementById('output');

    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.pop(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
   
}

   
function joinItem() {
  var task = document.getElementById('task');
  var joutput = document.getElementById('join');
  var action = 'Join-task'
  if(task.value){
        
        action +='<h1>'+tasks.join() +'</h1>' 
        joutput.innerHTML =action;
    }
    return false;
} 

// End of join Function
 

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
 // For Item Remove Function Calling
    document.getElementById('remove').onclick = removeItem;
 // For Item join Function Calling
   document.getElementById('B-join').onclick = joinItem; 
} // End of init() function.
window.onload = init;