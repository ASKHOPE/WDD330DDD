const banner_msg = document.getElementById("chamber-meeting-invite");
const todayDate = new Date();
const day = todayDate.getDay();
if (day == 1 || day == 2) {
  banner_msg.style.display = "block";
} else {
  banner_msg.style.display = "none";
}
