const requestURL = "https://askhope.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //loop integraded in the promise
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const buziness = jsonObject["data"];
    const bcards = document.querySelector(".bcards");
    buziness.forEach((business) => {
      //Injects the rest of the code here itself.//
      let bcard = document.createElement("section");

      let logo = document.createElement("img");

      logo.setAttribute("src", business.logourl);

      logo.setAttribute(
        "alt",
        `Logo of ${business.name}, located at ${business.address} and they can be reached at ${business.phone}`
      );


      let h2 = document.createElement("h2");
      h2.textContent = `${business.name} `;

      let p1 = document.createElement("p");
      p1.textContent = ` ${business.phone}`; 

      let p2 = document.createElement("p");
      p2.textContent = ` ${business.address}`;

      let p3 = document.createElement("p");
      p3.textContent = ` ${business.website}`;

      //logo.setAttribute("loading", "lazy");
      bcard.appendChild(logo);
      bcard.appendChild(h2);
      bcard.appendChild(p1);
      bcard.appendChild(p2);
      bcard.appendChild(p3);
      bcards.appendChild(bcard);
      document.querySelector("div.bcards").appendChild(bcard);
    });
  });
