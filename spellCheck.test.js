const { cleanWord } = require("./spellCheckLogic")

describe("cleanWord Logic", () => {
  test("cleanWord removes punctuation and converts to lowercase", () => {
    expect(cleanWord("Danial!")).toBe("danial");
    expect(cleanWord("World,")).toBe("world");
    expect(cleanWord("HELLO!!!")).toBe("hello");
    expect(cleanWord("  Leading and trailing  ")).toBe("leading and trailing"); 
  });
});