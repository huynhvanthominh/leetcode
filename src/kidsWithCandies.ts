function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = Math.max(...candies);
  return candies.map(item => {
    return item + extraCandies >= max;
  });
};


interface IInput { };
interface IOutput { };

const inputs: {
  input: [number[], number],
  out: boolean[]
}[] = [
    {
      input: [[2, 3, 5, 1, 3], 3],
      out: [true, true, true, false, true]
    }
  ];

inputs.forEach(({ input, out }) => {
  console.log(kidsWithCandies(...input), kidsWithCandies(...input) === out)
})

process.stdin.resume(); // keeps the process running
