const high = (sentence) => {
  let count = 1;
  const words = sentence.split(" ");
  // convert into object with each letter value
  const aplhabetScore = "abcdefghijklmnopqrstuvwxyz".split("").reduce((object, letter) => {
    object[letter] = count++;
    return object;
  }, {});

  const scoreEachWord = words.map((word) => {
    const letters = word.split("").reduce((accumulator, letter) => {
      for (const key in aplhabetScore) {
        if (key == letter) return accumulator + aplhabetScore[key];
      }
    }, 0);
    return letters;
  });

  const biggerWord = scoreEachWord.indexOf(Math.max(...scoreEachWord));

  return words[biggerWord];
};

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");
