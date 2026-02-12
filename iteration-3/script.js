const messages = [
  "The line is made up of an infinite number of points;",
  "the plane is made up of an infinite number of lines;",
  "the hypervolume of an infinite number of volumes.... ",
  "No, unquestionably this is not—more geometrico—the best way of beginning my story.",
  "To claim that it is true is nowadays the convention of every made-up story.",
  "Mine, however, is true."
];

let messageIndex = 0;
let charIndex = 0;
let isTyping = false;

const typeEl = document.getElementById("type");
const inputEl = document.getElementById("searchInput");

// typing effect
function typeMessage(text) {
  isTyping = true;
  typeEl.textContent = "";
  charIndex = 0;

  function typeChar() {
    if (charIndex < text.length) {
      typeEl.textContent += text[charIndex];
      charIndex++;
      setTimeout(typeChar, 60);
    } else {
      isTyping = false;
    }
  }

  typeChar();
}

// start with first message
typeMessage(messages[messageIndex]);

// listen for Enter key
inputEl.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (isTyping) return;

  const userText = inputEl.value.trim();

  if (userText === messages[messageIndex]) {
    messageIndex++;

    if (messageIndex < messages.length) {
      inputEl.value = "";
      typeMessage(messages[messageIndex]);
    } else {
      typeEl.textContent = "Done.";
      inputEl.disabled = true;
    }
  } else {
    // optional: feedback on wrong input
    typeEl.textContent = "Try again.";
  }
});



