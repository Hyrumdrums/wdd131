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
