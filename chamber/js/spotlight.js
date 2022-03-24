const requestURL =
  "https://askhope.github.io/wdd230/chamber/data/data.json";  

let spot1 = document.querySelector(".spotlight1");
let spot2 = document.querySelector(".spotlight2");
let spot3 = document.querySelector(".spotlight3");
let spot = document.querySelector(".spotlight");
let spotFilled = 0;
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //  temporary checking for valid response and data parsing
    const localbusiness = jsonObject["data"];
    // localbusiness.forEach(displayBusiness);
    let spotlightbusiness = localbusiness.filter(
      (x) => x.membership === "Gold" || x.membership === "Silver"
    );
    spotlightbusiness.sort((a, b) => 0.5 - Math.random());
    let goldbusiness = spotlightbusiness.filter((x, index) => index < 3);
    goldbusiness.forEach((business, index) =>
      displaySpotlight(business, index + 1)
    );
   
  });

function displaySpotlight(business, index) {
  let card = document.createElement("section");
  let h3 = document.createElement("h3");
  let logo = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  //let p3 = document.createElement("p");
  let a = document.createElement("a");
  let mem = document.createElement("mem");

  card.setAttribute("class", `spot${index}`);
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute("src", `${business.logourl}`);
  logo.setAttribute("alt", `logo for ${business.name}`);
  logo.setAttribute("class", "logo");

  // Change the innerHTML property of the h3 element to contain the business' info
  h3.innerHTML = `${business.name}`;
  p1.textContent = `${business.phone}`;
  p2.textContent = `${business.address}`;

  a.href = `${business.website}`;
  a.target = "_blank";
  a.textContent = `${business.website}`;
  // Add/append the section(card) with the a element

  mem.innerHTML = `${business.membership}`;

  // Add/append the section(card) with the h2 element

  card.appendChild(h3);
  card.appendChild(logo);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(a);

  //card.appendChild(p3);
  //card.appendChild(mem);

  // Add/append the existing HTML div with the cards class with the section(card)
  spot.appendChild(card);
}

