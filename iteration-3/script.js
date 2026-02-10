const input = document.getElementById("searchInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});


const text = "The line is made up of an infinite number of points;";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("type").textContent += text[i];
    i++;
    setTimeout(typeText, 80);
  }
}

typeText();

