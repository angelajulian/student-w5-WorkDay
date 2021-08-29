let hours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

let now = moment().format("h A");
// let now = "10 am";

$("#currentDay").text(moment().format("dddd, MMM, Do"));

$(".hour").each(function (i) {
  $(this).text(
    moment()
      .hour(i + 9)
      .format("h A")
  );
});

console.log(now);

$(".time-block").each(function (i) {
  console.log(hours.indexOf(now));
});

const createHourlyTask = function (whatTime, hour, id) {
  let timeBlockDiv = $(`<div id=${id}>`).addClass("row time-block");

  let hourEl = $("<div>").addClass("hour col-md-1").text(hour);

  let textareaEl = $("<textarea>").addClass(
    `col-md-10 description ${whatTime}`
  );

  if (localStorage.getItem(id)) {
    textareaEl.text(localStorage.getItem(id));
  }

  let saveBtn = $("<button>").addClass("btn saveBtn col-md-1");

  let iEl = $("<i>").addClass("fas fa-save");

  timeBlockDiv.append(hourEl).append(textareaEl).append(saveBtn);

  saveBtn.append(iEl);

  $("div.container").append(timeBlockDiv);
};

//create the hour function
const createHours = function () {
  for (i = 0; i < hours.length; i++) {
    let modId = hours[i].split(" ");
    if (hours.indexOf(now) === i) {
      createHourlyTask("present", hours[i], modId[0]);
    } else if (hours.indexOf(now) < i) {
      console.log(hours.indexOf(now));
      createHourlyTask("future", hours[i], modId[0]);
    } else if (hours.indexOf(now) > i) {
      createHourlyTask("past", hours[i], modId[0]);
    }
  }
};

createHours();

$("button").click(function () {
  let value = $(this).siblings("textarea").val();
  let id = $(this).parent().attr("id");
  console.log(id);
  localStorage.setItem(id, value);
});
