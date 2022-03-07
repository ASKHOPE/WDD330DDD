function toggleMenu() {
  document.getElementById("gridviewBtn").classList.toggle("open");
  document.getElementById("listsviewBtn").classList.toggle("open");
  document.getElementById("defgridview").classList.toggle("open");
}

const xo = document.getElementById("gridviewBtn");
xo.onclick = toggleMenu;

const ox = document.getElementById("listsviewBtn");
ox.onclick = toggleMenu;
