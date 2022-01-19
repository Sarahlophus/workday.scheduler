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
  // console.log(timeNow);
  // loop through task lists
  // for (var i = 0; i <= taskTimes.length; i++)
  $(".js-task").each(function () {
    // compare times
    // if current TOD is less than calendar time change color to #CCCCCC
    // console.log(parseInt($(this).parent().attr("id").slice(4)));
    if (parseInt($(this).parent().attr("id").slice(4)) < timeNow) {
      $(this).addClass("present");
      // $(".past").css("background-color", "#CCCCCC");
      // if current TOD is equal to calendar time, change color to #FFE485
    } else if (parseInt($(this).parent().attr("id").slice(4)) === timeNow) {
      $("this").addClass("present");
      // $(".present").css("background-color", "#FFE485");
      // if current TOD is greater than calendar time, change color to #85FFE0
    } else {
      $("this").addClass("future");
      // $(".future").css("background-color", "#85FFE0");
    }
  });
}

// event listeners
// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// retrieve tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));

// user clicks save button
$(".js-saveBtn").on("click", saveTask);

timeColors();
