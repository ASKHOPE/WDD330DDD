function toggleMenu() {
  document.getElementById("gridviewBtn").classList.toggle("open");
  document.getElementById("listviewBtn").classList.toggle("open");
}

const xo = document.getElementById("viewerselection");
xo.onclick = toggleMenu;
