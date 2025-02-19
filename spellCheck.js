
import wordsArray from "./words.json" with { type: "json" };
const words = wordsArray.toString();

const textInput = document.getElementById("text");
const checkButton = document.getElementById("check");
const addButton = document.getElementById("add-word");
const misspelledDiv = document.getElementById("misspelled-words");

let customWords = new Set();



function cleanWord(word) {
    return word.trim().toLowerCase().replace(/[.,?!":;]/g, "");
}


function spellCheck() {
    misspelledDiv.innerHTML = "";
    let text = textInput.value;
    if (!text) return;

    let wordsArray = text.split(/\s+/);
    let misspelled = [];

    wordsArray.forEach(word => {
        let cleaned = cleanWord(word);

        if (cleaned.includes("-")) {
            cleaned.split("-").forEach(subWord => {
                if (!words.toLowerCase().includes(subWord) && !customWords.has(subWord)) {
                    misspelled.push(subWord);
                }
            });
        } else {
            if (!words.toLowerCase().includes(cleaned) && !customWords.has(cleaned)) {
                misspelled.push(cleaned);
            }
        }
    });

    if (misspelled.length > 0) {
        misspelled.forEach(word => {
            let div = document.createElement("div");
            div.textContent = `${word} is misspelled`;
            misspelledDiv.appendChild(div);
        });
    }
}

addButton.addEventListener("click", () => {
    let newWord = prompt("Enter a word:");
    if (newWord) {
        customWords.add(newWord.toLowerCase());
        spellCheck();
    }
})




checkButton.addEventListener("click", spellCheck);


