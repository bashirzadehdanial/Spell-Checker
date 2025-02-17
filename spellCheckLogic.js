const words = require("./words.json");

function cleanWord(word) {
  return word
    .trim()
    .toLowerCase()
    .replace(/[.,?!":;]/g, "");
}

module.exports = { cleanWord };
