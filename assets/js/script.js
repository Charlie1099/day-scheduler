//display the date at the top of the page under the text there

saveEl.addEventListener(click, "#save")

//time blocks need to display the time 
//and have color green if it is in the fucher and white for presint and 
//red if past due.

  // get date from task element
  

  // convert to moment object at 5:00pm
 
  // remove any old classes from element
  

  // apply new class if task is near/over due date
  


//need to make a button to save on local storage
var saveTasks = function () {
    localStorage.setItem("#saveBtn", JSON.stringify(tasks));
  };

  