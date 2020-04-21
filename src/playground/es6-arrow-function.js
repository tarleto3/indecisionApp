// const square = function (x) {
//     return x * x;
// };

// console.log(square(4));

// const squareArrow = (x) => x * x;

const multiplier = {
  //numbers[] to be multiplied
  //multiply by - single number
  //multiply - return new array of the numbers that have been multiplied by
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
     return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
