const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function add(input) {
  if (input === ",") {
    return 0;
  }
  let number = input.replace(/[\\//n/n\n///!;]/g, ",");
  console.log(number);
  number = number.split(",");
  let len = number.length;
  number = number.filter((number) => number !== "");
  for (let i = 0; i < len; i++) {
    if (number[i] < 0) {
      return `Negative number not allowed ${number[i]}`;
    }
  }
  if (len === 1) {
    return input;
  } else if (len > 1) {
    const result = number.reduce((sum, numbers) => {
      sum += parseInt(numbers);
      return sum;
    }, 0);
    return result;
  }
}
r1.question(
  "Enter the different numbers separated by commas: ",
  (userinput) => {
    console.log(add(userinput));
    r1.close();
  }
);

module.exports = { add };
