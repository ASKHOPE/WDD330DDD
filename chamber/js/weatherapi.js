const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Rajahmundry&units=metric&appid=76088e3b3b69023841d188f0bf640df2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const t = jsObject.main.temp.toFixed(1);
    document.querySelector("#current-temp").textContent = t;

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windsp = jsObject.wind.speed;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("#desc").textContent = desc;
    document.querySelector("#speed").textContent = windsp;

    if (t <= 10 && windsp > 4.8) {
      const windchill =
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(windsp, 0.16) +
        0.3965 * t * Math.pow(windsp, 0.16);
      document.querySelector("#windchill").innerHTML = `${Math.round(
        windchill
      )}&#176;`;
    } else {
      document.querySelector("#windchill").innerHTML = "N/A";
    }
  });