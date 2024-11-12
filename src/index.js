function updateTime() {
  //Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = document.querySelector("#johannesburg .date");
  let johannesburgTimeElement = document.querySelector("#johannesburg .time");

  johannesburgDateElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("HH:mm:ss [<small>]A[</small>]");

  //New York

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = document.querySelector("#new-york .date");
  let newYorkTimeElement = document.querySelector("#new-york .time");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
