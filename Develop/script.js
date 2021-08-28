let saved = {};

let hours = [
  "9 am",
  "10 am",
  "11 am",
  "12 am",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
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
  if (saved[`hour${hour}`]) desDiv.append(description);

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
    } else if (hours.indexOf(now) < i && hours.indexOf(now) > 0) {
      console.log(hours.indexOf(now));
      createHourlyTask("future", hours[i]);
    } else {
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
  $("p, select, textarea").each(function () {
    let value = $(this).val();
    let name = $(this).attr("name");
    saved.push({ name: value });
    // console.log("worked!");
  });
});
