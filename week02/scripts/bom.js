const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
function addChapter(chapter) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = chapter;
  deleteButton.textContent = "❌";
  deleteButton.setAttribute("aria-label", "Close");
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
  });
  li.append(deleteButton);
  list.append(li);
}
button.addEventListener("click", function () {
  if (input.value.trim !== "") {
    addChapter(input.value);
    input.value = "";
  } else {
    alert("Please enter a chapter name.");
  }
  input.focus();
});
