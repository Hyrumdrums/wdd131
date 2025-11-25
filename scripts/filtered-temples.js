document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    if (nav.style.display === "block") {
      nav.style.display = "none";
      hamburgerMenu.innerHTML = "☰";
    } else {
      nav.style.display = "block";
      hamburgerMenu.innerHTML = "&#x2715;";
    }
  });

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg",
  },
  {
    templeName: "Adelaide Australia",
    location: "Adelaide, Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg",
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg",
  },
];

const filterTemples = (param) => {
  switch (param) {
    case "home":
      return temples;
    case ("old", "new"):
      return temples.filter((temple) => {
        const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
        if (param === "old") {
          return dedicatedYear < 1900;
        } else {
          return dedicatedYear >= 2000;
        }
      });
    case "large":
      return temples.filter((temple) => temple.area >= 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
  }
};

document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const param = event.target.textContent.toLowerCase();
    const filteredTemples = filterTemples(param);
    displayTemples(filteredTemples);
  });
});

const displayTemples = (templesToDisplay) => {
  document.querySelector(".temple-gallery").innerHTML = "";
  templesToDisplay.forEach((temple) => {
    document.querySelector(".temple-gallery").innerHTML += renderTemple(temple);
  });
};

const renderTemple = (temple) => {
  return `
    <div class="temple-card">
      <h2>${temple.templeName}</h2>
      ${renderDataRow("Location", temple.location)}
      ${renderDataRow("Dedicated", temple.dedicated)}
      ${renderDataRow("Size", temple.area + " sq ft")}
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"/>
`;
};

const renderDataRow = (label, value) => {
  return `<div class="data"><span>${label}:</span><span>${value}</span></div>`;
};
