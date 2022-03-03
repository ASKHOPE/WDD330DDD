const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //loop integraded in the promise
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    const cards = document.querySelector(".cards");

    prophets.forEach((prophet) => {
      //Injects the rest of the code here itself.//
      let card = document.createElement("section");

      let h2 = document.createElement("h2");
      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      let p1 = document.createElement("p");
      p1.textContent = `Date of Birth: ${prophet.birthdate}`;

      let p2 = document.createElement("p");
      p2.textContent = `Place of Birth: ${prophet.birthplace}`;

      let portrait = document.createElement("img");
      let order = ``;

      switch (prophet.order) {
        case 1:
          order = `${prophet.order}st`;
          break;
        case 2:
          order = `${prophet.order}nd`;
          break;
        case 3:
          order = `${prophet.order}rd`;
          break;
        default:
          order = `${prophet.order}th`;
      }

      portrait.setAttribute("src", prophet.imageurl);
      //portrait.setAttribute("alt", `Date of Birth: ${prophet.birthdate}`);
      portrait.setAttribute(
        "alt",
        `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`
      );

      portrait.setAttribute("loading", "lazy");
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(portrait);
      cards.appendChild(card);
      document.querySelector("div.cards").appendChild(card);
    });
  });
