$(document).ready(function () {

  var currentFormattedTime = moment().format('MMMM D, YYYY, dddd h:mm:ss a');
  $("#currentDay").text(currentFormattedTime);

  var goldenTime = moment().hour();
  $(".task-block").each(function (index, timeBlock) {
    var hour = parseInt($(timeBlock).attr("hour"));
    if (hour < goldenTime) {
      $(timeBlock).addClass("past");
    } else if (hour === goldenTime) {
      $(timeBlock).addClass("present");
    } else if (hour > goldenTime) {
      $(timeBlock).addClass("future");
    }
  });

  $(".saveBtn").on("click", function (event) {
    var oldData = JSON.parse(localStorage.getItem("data")) || [];
    var id = $(event.target).closest(".task-block").attr("hour");
    var text = $(event.target).closest(".task-block").find(".description").val();

    var dataEntry = {
      id: id,
      text: text
    }

    oldData.push(dataEntry);
    localStorage.setItem("data", JSON.stringify(oldData));
  });

  var data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach(function (datum) {
    var query = `[hour='${datum.id}']`;
    $(query).find(".description").val(datum.text);
  });


});

