// global variables

// functions
// save tasks to local storage
function saveTask() {
  console.log($(this).parent());

  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();

  localStorage.setItem(time, task);
}

// event listeners
// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// retrieve tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));

// user clicks save button
$(".js-saveBtn").on("click", saveTask);
