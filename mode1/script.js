document.addEventListener("DOMContentLoaded", () => {

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

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[—–]/g, "-")
      .replace(/[^\w\s]/g, "")
      .trim();
  }

  typeMessage(messages[messageIndex]);

  inputEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    if (isTyping) return;

    const userText = inputEl.value;

    if (normalize(userText) === normalize(messages[messageIndex])) {
      messageIndex++;
      inputEl.value = "";

      if (messageIndex < messages.length) {
        typeMessage(messages[messageIndex]);
      } else {
        typeEl.textContent = "Done.";
        inputEl.disabled = true;
      }
    } else {
      const currentMessage = messages[messageIndex];

      typeEl.textContent = "Try again.";

      setTimeout(() => {
        typeMessage(currentMessage);
      }, 1200);
    }
  });
});