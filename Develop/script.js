let saved = {};

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

const createHourlyTask = function (whatTime, hour) {
  let hourlySpan = $(`<span id=${hour}>`)
    .addClass("row")
    .addClass("time-block");

  let hourEl = $("<div>").addClass("hour").addClass("col").text(hour);

  let desDiv = $("<div>").addClass(whatTime).addClass("col-9");
  let description = $(`<textarea name='hour${hour}'>`).addClass("description");
  if (saved[`hour${hour}`]) {
    description.text = saved[`hour${hour}`];
  }
  desDiv.append(description);

  let btnDiv = $("<div>").addClass("col");
  let saveBtn = $("<button>").addClass("saveBtn btn-primary");
  btnDiv.append(saveBtn);

  hourlySpan.append(hourEl).append(desDiv).append(btnDiv);

  $("div.container").append(hourlySpan);
};

//create the hour function
const createHours = function () {
  for (i = 0; i < hours.length; i++) {
    if (hours.indexOf(now) === i) {
      createHourlyTask("present", hours[i]);
    } else if (hours.indexOf(now) < i) {
      console.log(hours.indexOf(now));
      createHourlyTask("future", hours[i]);
    } else if (hours.indexOf(now) > i) {
      createHourlyTask("past", hours[i]);
    }
  }
};

createHours();

const loadHours = function () {
  hours = JSON.parse(localStorage.getItem("hours"));
  $.each(hours, function (obj) {
    console.log(obj);
  });
};

$("button").click(function () {
  $("textarea, select, textarea").each(function (event) {
    let value = $(this).val(),
      name = $(this).attr("name");
    localStorage[name] = value;
    console.log(localStorage);
    // console.log("worked!");
  });
});
