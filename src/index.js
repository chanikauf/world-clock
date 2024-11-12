function updateTime() {
  //Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");

  if (johannesburgElement) {
    let johannesburgDateElement = document.querySelector("#johannesburg .date");
    let johannesburgTimeElement = document.querySelector("#johannesburg .time");

    johannesburgDateElement.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("HH:mm:ss [<small>]A[</small>]");
  }

  //New York

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#new-york .date");
    let newYorkTimeElement = document.querySelector("#new-york .time");

    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  citiesElement = document.querySelector("#cities");
  let cityHours = cityTime.format("HH:mm:ss [<small>]A[</small>]");
  citiesElement.innerHTML = `<div class="city">
          <div class="city-and-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityHours}</div>
        </div>
        <hr>
        <a href="/">All Cities</a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
