const morseTable = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
   
};
 
const toMorse = (text) => {
    return text.split("").map(char => morseTable[char]).join(" ");
};
 
const fromMorse = (morse) => {
    const words = morse.split(" / ");
    return words.map(word => word.split("").map(char => {
        for (const [key, value] of Object.entries(morseTable)) {
            if (value === char) {
                return key;
            }
        }
    }).join("")).join(" ");
};
 
const init = () => {
    const toMorseButton = document.getElementById("to-morse");
    const fromMorseButton = document.getElementById("from-morse");
    const textToMorseInput = document.getElementById("text-to-morse");
    const morseToTextInput = document.getElementById("morse-to-text");
    toMorseButton.addEventListener("click", () => {
        const text = textToMorseInput.value;
        const morseCode = toMorse(text);
        morseToTextInput.value = morseCode;
    });
 
    fromMorseButton.addEventListener("click", () => {
        const morseCode = morseToTextInput.value;
        const text = fromMorse(morseCode);
        textToMorseInput.value = text;
    });
};
 
init();