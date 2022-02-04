const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

const date2 = document.querySelector('#currentdate');

document.querySelector(".last-updated").textContent = `Last Updated: ${document.lastModified}`;

//document.querySelector("#copyrightyear").textContent = year;

/*
try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

*/