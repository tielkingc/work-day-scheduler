var taskELs = document.getElementsByClassName("task");
// task text was clicked
for (var c = 0; c < 9; c++) {
    $(".task" + c).on("click", "p", function() {
        // get current text of p element
        var text = $(this)
        .text()
        .trim();
        
        var currentClass = document.getElementsByClassName("task" +c).className
        console.log(currentClass)
        // replace p element with a new textarea
        var textInput = $("<textarea>").addClass(currentClass).val(text);
        
        $(this).replaceWith(textInput);
    
        // auto focus new element
        textInput.trigger("focus");
    });
    
    // editable field was un-focused
    $(".task" + c).on("blur", "textarea", function() {
        // get current value of textarea
        var text = $(this).val();
    
        // get status type and position in the list
        var status = $(this)
        .closest(".task")
        .attr("id");
        var index = $(this)
        .closest(".task")
        .index();
    
        // update task in array and re-save to localstorage
        //tasks[status][index].text = text;
        //saveTasks();
    
        // recreate p element
        var taskP = $("<p>")
        .text(text);
    
        // replace textarea with new content
        $(this).replaceWith(taskP);
    });
}
  var auditTask = function() {
    // convert to moment object at 5:00pm
    var realTime = moment().hour();
    
    var spanEls = document.getElementsByClassName("site-time");
    
    for ( var b = 0; b<9; b++){
        
        
        var time = $(spanEls[b]).text().trim();
        time = parseInt(time) 
            
        // remove any old classes from element
        
        if (time < 9) {
            time = time + 12
        }
        // apply new class if task is near/over due date
        if (time < realTime) {
            $(".task" + b).removeClass("description past future present");
            $(".task" + b).addClass("past");
            //console.log("past")
        }
        else if (time > realTime) {
            $(".task" + b).removeClass("description past future present");
            
            $(".task" + b).addClass("future");
            //console.log("future")
        }
        else if (moment().hour() === time){
            
            $(".task" + b).removeClass("description");
            $(".task" + b).addClass("present")
        }
        
    }
    
  };
  
auditTask();
  /*setInterval(function() {
    auditTask();
  }, 1000);*/