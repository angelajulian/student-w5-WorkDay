let hours = {
    nine : ['9am', ''], 
    ten : ['10am', ''], 
}

$("#currentDay").html("TODAY'S DATE");

const createHourlyTask = function (whatTime, hour, text) {
  let hourlySpan = $(`<span id=${hour}>`)
    .addClass("row")
    .addClass("time-block");

  let hourEl = $("<div>").addClass("hour").addClass("col").text(hour);

  let desDiv = $("<div>").addClass(whatTime).addClass("col-9");
  let description = $("<p>").addClass("description").text(text);
  desDiv.append(description);

  let btnDiv = $("<div>").addClass("col");
  let saveBtn = $("<button>").addClass("saveBtn btn-primary");
  btnDiv.append(saveBtn);

  hourlySpan.append(hourEl).append(desDiv).append(btnDiv);

  $("div.container").append(hourlySpan);
};

//create the hour function
const createHours = function () {
  let whatTime = "present";
  for (i = 9; i < 18; i++) {
    hour = i;
    if (hour > 12) {
      hour = hour - 12;
      hour = hour + "pm ";
    } else {
      hour = hour + "am ";
    }

    createHourlyTask(whatTime, hour, text);
  }
};

const loadHours = function () {
  hours = JSON.parse(localStorage.getItem("hours"));
  $.each(hours, function (obj) {
    console.log(obj);
  });
};

console.log(hours);

$(".hourEl").on("click", "p", function () {
  console.log("wasClicked");
});
// createHours();
loadHours();

const saveTask = function () {
  localStorage.setItem("hours", JSON.stringify(hours));
};

$("saveBtn").click(function () {
  //save text in textarea to localstorage
  //convert textarea to p
});
