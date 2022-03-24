const requestURL =
  "https://askhope.github.io/wdd230/chamber/data/data.json"; /*spotlightData*/ 


let spot1 = document.querySelector(".spot1");
let spot2 = document.querySelector(".spot2");
let spot3 = document.querySelector(".spot3");
let spot = document.querySelector(".spot");
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
      (x) => x.membership === "gold" || x.membership === "silver"
    );
    spotlightbusiness.sort((a, b) => 0.5 - Math.random());
    let goldbusiness = spotlightbusiness.filter((x, index) => index < 3);
    goldbusiness.forEach((business, index) =>
      displaySpotlight(business, index + 1)
    );
    //   let goldbusiness = localbusiness.filter((x,index) => index < 3);
    //   goldbusiness.forEach((business, index) => displaySpotlight(business, index+1));
  });

function displaySpotlight(goldbusiness, index) {
  let card = document.createElement("section");
  let h3 = document.createElement("h3");
  let logo = document.createElement("img");
  let p1 = document.createElement("p1");
  let p3 = document.createElement("p3");
  let p4 = document.createElement("p4");
  let mem = document.createElement("mem");

  card.setAttribute("class", `spot${index}`);
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute("src", `${goldbusiness.logourl}`);
  logo.setAttribute("alt", `logo for ${goldbusiness.bizname}`);
  logo.setAttribute("class", "logo");

  // Change the innerHTML property of the h3 element to contain the business' info
  h3.innerHTML = `${goldbusiness.bizname}`;
  p1.innerHTML = `${goldbusiness.phone}`;
  p3.innerHTML = `${goldbusiness.address} <br> ${goldbusiness.city} ${goldbusiness.zip}`;
  p4.innerHTML = `<a href="${goldbusiness.website}">website</a>`;
  mem.innerHTML = `${goldbusiness.membership} sponsor`;

  // Add/append the section(card) with the h2 element

  card.appendChild(h3);
  card.appendChild(logo);
  card.appendChild(p1);
  card.appendChild(p3);
  card.appendChild(p4);
  card.appendChild(mem);

  // Add/append the existing HTML div with the cards class with the section(card)
  spot.appendChild(card);
}





/*---------OLDD--

var spotFilled = 0;

function displaySpotlight(business, card) {  // Create elements to add to the document

    let h3 = document.createElement('h3');
    let img1 = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    //let p4 = document.createElement('p');
    let a = document.createElement('a');
  
    // Change the textContent property of the h2 element to contain the business name
    h3.textContent = `${business.name}`;
    h3.setAttribute('id', "bizname");
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    // Change the src and alt properties of the img1 element to contain the business icon
    img1.src = `${business.logourl}`;
    img1.setAttribute('alt', `${business.name} icon`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    // Change the textContent property of the p1 element to contain the 1 line business address
    p1.textContent = `${business.address}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the business phone number
    p2.textContent = `${business.phone}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the properties of the a element to contain the business website
    a.href = `${business.website}`;
    a.target = "_blank";
    a.textContent = `${business.website}`;
    // Add/append the section(card) with the a element
    card.appendChild(a);
    // Change the textContent property of the p3 element to contain the business contact email
    //p3.textContent = `${business.email}`;
    // Add/append the section(card) with the p3 element
    // card.appendChild(p3);
  } 

function findSpotlight(business) {  // Create elements to add to the document
    if ((business.membership != "Gold" && business.membership != "Silver") || spotFilled == 3)
        return;
    else {
        if (spotFilled == 0) {
            let bizCard = document.querySelector('#spotlight1');
            displaySpotlight(business, bizCard);
        }
        if (spotFilled == 1) {
            let bizCard = document.querySelector('#spotlight2');
            displaySpotlight(business, bizCard);
        }
        if (spotFilled == 2) {
            let bizCard = document.querySelector('#spotlight3');
            displaySpotlight(business, bizCard);
        }
        spotFilled++;
    }
} 

  getSpotlight();
  /*getDirectory.catch(error => {
    console.log("Error!");
    console.error(error);
  })

  async function getSpotlight() {
    const response = await fetch(spotlightData);
    var bizList = await response.json();
    const shuffledList = bizList.sort((a, b) => 0.5 - Math.random());
/*    var bestBiz = bizList.filter( sl =>
        sl.membership == "Gold" || 
        sl.membership == "Silver"); 
    shuffledList.forEach(findSpotlight);
  }

/*
fetch(requestData)
  .then(function (response) {
    console.log("1st request promise")
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business_dir = jsonObject['directory'];
}); */




