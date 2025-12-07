const navItems = [
  { name: "Home", url: "index.html" },
  { name: "Beta Tester", url: "beta-tester.html" },
  { name: "Gallery", url: "gallery.html" },
];

// Create navigation
function createNav() {
  const navDiv = document.querySelector(".nav");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.name;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  navDiv.appendChild(nav);
}

// update footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${lastModified}`;

document.addEventListener("DOMContentLoaded", createNav);
