const assert = require("assert");

describe("renvoie l'input quand ce n'est ni un multiple de 3 et / ou de 5", () => {
  const tests = [
    { args: 1, expected: 1 },
    { args: 2, expected: 2 },
    { args: 4, expected: 4 },
    { args: 7, expected: 7 },
  ];

  tests.forEach(function (test) {
    it("renvoie " + test.expected + " quand on passe " + test.args, () => {
      assert.deepStrictEqual(fizzBuzz(test.args), test.expected);
    });
  });
});

describe("renvoie fizz quand l'input est un multiple de 3", () => {
  const tests = [
    { args: 3, expected: "Fizz" },
    { args: 6, expected: "Fizz" },
    { args: 9, expected: "Fizz" },
    { args: 12, expected: "Fizz" },
  ];

  tests.forEach(function (test) {
    it("renvoie " + test.expected + " quand on passe " + test.args, () => {
      assert.deepStrictEqual(fizzBuzz(test.args), test.expected);
    });
  });
});

describe("renvoie buzz quand l'input est un multiple de 5", () => {
  const tests = [
    { args: 5, expected: "Buzz" },
    { args: 10, expected: "Buzz" },
    { args: 25, expected: "Buzz" },
    { args: 20, expected: "Buzz" },
  ];

  tests.forEach(function (test) {
    it("renvoie " + test.expected + " quand on passe " + test.args, () => {
      assert.deepStrictEqual(fizzBuzz(test.args), test.expected);
    });
  });
});

describe("renvoie fizzbuzz quand l'input est un multiple de 3 et 5", () => {
  const tests = [
    { args: 15, expected: "FizzBuzz" },
    { args: 30, expected: "FizzBuzz" },
    { args: 45, expected: "FizzBuzz" },
    { args: 60, expected: "FizzBuzz" },
  ];

  tests.forEach(function (test) {
    it("renvoie " + test.expected + " quand on passe " + test.args, () => {
      assert.deepStrictEqual(fizzBuzz(test.args), test.expected);
    });
  });
});

const fizzBuzz = (input) => {
  if (isDivisibleBy(input, 3) && isDivisibleBy(input, 5)) {
    return "FizzBuzz";
  }

  if (isDivisibleBy(input, 3)) {
    return "Fizz";
  }

  if (isDivisibleBy(input, 5)) {
    return "Buzz";
  }

  return input;
};

const isDivisibleBy = (input, number) => {
  return input % number === 0;
};
