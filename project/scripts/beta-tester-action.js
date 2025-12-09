function updateCount() {
  localStorage = window.localStorage;

  count = localStorage.getItem("betaTesterCount");
  count++;
  localStorage.setItem("betaTesterCount", count);

  // display on page
  document.getElementById("count").textContent = count;
}

updateCount();
