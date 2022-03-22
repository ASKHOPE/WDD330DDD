// get the stored value in localStorage
let lastvisit = Number(window.localStorage.getItem("lastvisit"));

if (lastvisit != 0) {
  let thisvisit = Date.now();

  let FACTOR = 86400000;

  let daysBetween = (thisvisit - lastvisit) / FACTOR;

  if (daysBetween.toFixed(0) != 1) {
    document.querySelector("#lastvisit").textContent = 'It has been ' + daysBetween.toFixed(0) + ' days since your last visit.';

    window.localStorage.setItem("lastvisit", thisvisit);

    /*else {
      window.localStorage.setItem('lastvisit', Date.now());
      document.querySelector("lastvisit").textContent =
        "This is your first visit! Find something you'll love!";
    
      window.localStorage.setItem("lastvisit", thisvisit);
    }*/
  } else {
    document.querySelector(".lastvisit").textContent =
      "It has been " + daysBetween.toFixed(0) + " day since your last visit.";

    window.localStorage.setItem("lastvisit", thisvisit);
  }
} else {
  window.localStorage.setItem("lastvisit", Date.now());
  document.querySelector(".lastvisit").textContent =
    "This is your first visit! Welcome!";
}
