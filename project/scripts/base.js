const navItems = [
  { name: "Home", url: "index.html" },
  { name: "Beta Tester", url: "beta-tester.html" },
  { name: "Gallery", url: "gallery.html" },
];

// Create navigation
function createNav() {
  const navDiv = document.querySelector(".nav");

  navItems.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.name;
    navDiv.appendChild(a);
  });
}

// update footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${lastModified}`;

document.addEventListener("DOMContentLoaded", createNav);
