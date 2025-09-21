function mergeAlternately(word1: string, word2: string): string {
  const a = word1.split("");
  const b = word2.split("");
  const max = Math.max(a.length, b.length);
  return Array.from({ length: max }).map((_, index) => (a[index] ?? '') + (b[index] ?? '')).join("");
};

const a = (mergeAlternately("abc", "xyz"))
const b = (mergeAlternately("ab", "xyz"))
const c = (mergeAlternately("abc", "xy"))

console.log(a, a === "axbycz")
console.log(b, b === "axbyz")
console.log(c, c === "axbyc")
