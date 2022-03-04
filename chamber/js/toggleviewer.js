function toggleMenu() {
  document.getElementById("gridviewBtn").classList.toggle("open");
  document.getElementById("listviewBtn").classList.toggle("open");
}

const x = document.getElementById("viewerselection");
x.onclick = toggleMenu;
