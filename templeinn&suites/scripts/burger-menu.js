function toggleMenu() {
  document.getElementById("navicron").classList.toggle("open");
  document.getElementById("hamburburBtn").classList.toggle("open");
}

const x = document.getElementById("hamburburBtn");
x.onclick = toggleMenu;
