function generateHashtag(str) {
  const strTrimed = str.trim();
  const stringToArray = strTrimed.split("");
  const eachWord = strTrimed.split(" ");
  const sizeStr = stringToArray.filter((letter) => letter !== " ").length;

  if (sizeStr === 0 || sizeStr >= 140) return false;

  const transformEachWordToUpper = eachWord.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const hashTag = `#${transformEachWordToUpper.join("")}`;

  return hashTag;
}

console.log(generateHashtag(""), false, "Expected an empty string to return false");
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string");
console.log(
  generateHashtag("Do We have A Hashtag"),
  "#DoWeHaveAHashtag",
  "Expected a Hashtag (#) at the beginning."
);
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.");
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.");
console.log(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work");
console.log(generateHashtag("a".repeat(140)), false, "Too long");
