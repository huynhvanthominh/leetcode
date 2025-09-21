function gcdOfStrings(str1: string, str2: string): string {
  if ((str1 + str2) != (str2 + str1)) {
    return ''
  }
  let w1 = str1.length
  let w2 = str2.length
  while (w2 != 0) {
    let temp = w2
    w2 = w1 % w2
    w1 = temp
  }

  return str1.substring(0, w1)
};

const iA = gcdOfStrings("abcabc", "abc");
const oA = "abc"

const iB = gcdOfStrings("ababab", "abab")
const oB = "ab"

const iC = gcdOfStrings("leet", "code")
const oC = ""

const iD = gcdOfStrings("ABCDEF", "ABC");
const oD = ""


const iE = gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX");
const oE = "TAUXX"
console.log(iA === oA, iB === oB, iC === oC, iD === oD, iE === oE);
process.stdin.resume(); // keeps the process running

