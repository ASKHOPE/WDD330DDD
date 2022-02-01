const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

const date2 = document.querySelector("#currentdate");

try {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  date2.textContent = new Date().toLocaleDateString("en-UK", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}

const now = new Date();
const datehead =document.getElementById("time-today");
const dateuk = new Intl.DateTimeFormat("en-UK", {  dateStyle: "full",}).format(now);
datehead.innerHTML = `<em>${dateuk}</em>`;


function toggleMenu() {
  document.getElementById("navicron").classList.toggle("open");
  document.getElementById("hamburburBtn").classList.toggle("open");
}

const x = document.getElementById("hamburburBtn");
x.onclick = toggleMenu;

window.onresize = () => {
    if (window.innerWidth > 1022) {
        navicron.classList.remove("open");
        hamburburBtn.classList.remove("open");
    }
  }
