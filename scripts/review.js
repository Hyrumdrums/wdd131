function updateCount() {
  localStorage = window.localStorage;

  count = localStorage.getItem("reviewCount");
  count++;
  localStorage.setItem("reviewCount", count);

  // display on page
  displayCount = "";
  switch (count) {
    case "1":
      displayCount = "first";
      break;
    case "2":
      displayCount = "second";
      break;
    case "3":
      displayCount = "third";
      break;
    default:
      displayCount = count + "th";
  }
  document.getElementById("count").textContent = displayCount;
}
// todo - would be better to make post conditional on not being a refresh.
updateCount();
