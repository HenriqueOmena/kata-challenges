function solution(number) {
  if (isNaN(number)) return NaN;

  let digits = String(number).split("");
  let key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  let roman = "";
  let i = 3;

  while (i--) {
    roman = (key[+digits.pop() + i * 10] || "") + roman;
  }

  const concat = Array(+digits.join("") + 1).join("M") + roman;
  return concat;

  const romanMap = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    LX: 60,
    LXX: 70,
    LXXX: 80,
    XC: 90,
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    DC: 600,
    DCC: 700,
    DCCC: 800,
    MD: 900,
    M: 1000,
  };
  const romanDigits = Object.entries(romanMap);

  for (const [Rletter, Rnumber] of romanDigits) {
    if (Rnumber === number) {
      return Rletter;
    }
  }

  //   if (isNaN(num))
  //   return NaN;
  // var digits = String(+num).split(""),
  //   key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  //          "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  //          "","I","II","III","IV","V","VI","VII","VIII","IX"],
  //   roman = "",
  //   i = 3;
  // while (i--)
  //   roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  // return Array(+digits.join("") + 1).join("M") + roman;
}

// console.log(solution(1), "I", '1 should, "I"');
// console.log(solution(2), "II", '2 should, "II"');
// console.log(solution(3), "III", '3 should, "III"');
// console.log(solution(4), "IV", '4 should, "IV"');
// console.log(solution(5), "V", '5 should, "V"');
// console.log(solution(9), "IX", '9 should, "IX"');
console.log(solution(10), "X", '10 should, "X"');
// console.log(solution(11), "XI");
// console.log(solution(19), "XIX");
// console.log(solution(22), "XXII");
// console.log(solution(15), "XV");

// console.log(solution(1000), "M", '1000 should, "M"');
// console.log(solution(1001), "MI", '1001 should, "MI"');
// console.log(solution(1990), "MCMXC", '1990 should, "MCMXC"');
// console.log(solution(2007), "MMVII", '2007 should, "MMVII"');
// console.log(solution(2008), "MMVIII", '2008 should, "MMVIII"');
// console.log(solution("asdasd"), "NaN", 'string should NAN, "MMVIII"');
