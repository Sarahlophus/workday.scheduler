// global variables

// functions
// save tasks to local storage
function saveTask() {
  console.log($(this).parent());

  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();

  localStorage.setItem(time, task);
}

// change scheudle time block colors based on current time
function timeColors() {
  const timeNow = moment().hours();

  // loop through task lists
  // for (var i = 0; i <= taskTimes.length; i++)
  $(".js-task").each(function () {
    // compare times
    // if current TOD is less than calendar time change color to #CCCCCC
    if (parseInt($(this).parent().attr("id").slice(4)) < timeNow) {
      $(this).addClass("past");
      // if current time is equal to calendar time, change color to #FFE485
    } else if (parseInt($(this).parent().attr("id").slice(4)) === timeNow) {
      $("this").addClass("present");
      console.log(parseInt($(this).parent().attr("id").slice(4)));
      // for other times (future), change color to #85FFE0
    } else {
      $("this").addClass("future");
    }
  });
}

// event listeners
// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// retrieve tasks from local storage
$("#hour09 .js-task").val(localStorage.getItem("hour09"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour13 .js-task").val(localStorage.getItem("hour13"));
$("#hour14 .js-task").val(localStorage.getItem("hour14"));
$("#hour15 .js-task").val(localStorage.getItem("hour15"));
$("#hour16 .js-task").val(localStorage.getItem("hour16"));
$("#hour17 .js-task").val(localStorage.getItem("hour17"));

// user clicks save button
$(".js-saveBtn").on("click", saveTask);

// call functions
timeColors();
