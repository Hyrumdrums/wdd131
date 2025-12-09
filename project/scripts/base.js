const navItems = [
  { name: "Home", url: "index.html" },
  { name: "Gallery", url: "gallery.html" },
  { name: "Beta Tester", url: "beta-tester.html" },
];

// Create navigation
function createNav() {
  const navDiv = document.querySelector(".nav");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navItems.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.name;
    
    // Add current class if this is the current page
    if (item.url === currentPage) {
      a.classList.add("current");
    }
    
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
