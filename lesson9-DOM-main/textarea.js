const textareaBtn = document.querySelector("#textarea-btn");

textareaBtn.addEventListener("click", () => {
    const textareaValue = document.querySelector("textarea").value;
    console.log(textareaValue);

    const charCount = textareaValue.length;
    console.log(charCount);

    const wordCount = textareaValue.split(" ").length;
    console.log(wordCount);

    const consoleCharCount = document.getElementById("char-count"); 
    consoleCharCount.textContent = "Character count: " + charCount;

    const consoleWordCount = document.getElementById("word-count");
    consoleWordCount.textContent = "Word count: " + wordCount;
})