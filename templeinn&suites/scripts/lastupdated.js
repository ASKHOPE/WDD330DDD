const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

const date2 = document.querySelector("#currentdate");

document.querySelector(
  ".last-updated"
).textContent = `Last Updated: ${document.lastModified}`;


/*
const now = new Date();
const datehead = document.getElementById("time-today");
const dateuk = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  now
);
datehead.innerHTML = `<em>${dateuk}</em>`;
*/