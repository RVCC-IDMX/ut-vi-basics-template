/*
 * @file: js-basic-04.test.js
 * @title: Arithmetic in JavaScript, The Math Object, & Type Conversion
 *
 * Instructor Note:
 *   - This assignment introduces basic arithmetic operations, usage of the Math object,
 *     and type conversion in JavaScript.
 *   - Each SKILL section contains clear instructions (TODO comments) for one or more lines
 *     of code that the students need to fill in.
 *   - Students should run the tests using Vitest (for example, by running "npm test" if your
 *     package.json is set up accordingly).
 *   - ESLint rules are disabled to reduce distractions for beginners.
 *
 * Overview:
 *   In this assignment you will:
 *     - Declare numeric constants and perform arithmetic.
 *     - Use Math.random() to generate random floating-point numbers.
 *     - Create random integers using Math.floor().
 *     - Use Math methods (floor, round) to round numbers appropriately.
 *     - Convert strings to numbers using parseInt() and the unary + operator.
 *     - Convert numbers to strings using .toFixed() to control decimal precision.
 */

/* ==============================
   SKILL 1: Simple Arithmetic on Numbers 🍎
   ==============================
   Explanation:
   - Declare two numeric constants (a and b) and compute their sum (c).
   - Using const demonstrates immutability; attempting to reassign should throw an error.

   TODO: This skill requires 3 lines of code.
   TODO: Use the const keyword to declare:
         - a with any number value.
         - b with a different number value.
         - c assigned to the sum of a and b.
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('arithmetic sum', () => {
  expect(typeof a).toBe('number');
  expect(() => {
    // Prove immutability by attempting to reassign a
    a = '🙉';
  }).toThrow();
  expect(typeof b).toBe('number');
  expect(() => {
    b = '🙉';
  }).toThrow();
  expect(typeof c).toBe('number');
  expect(() => {
    c = '🙉';
  }).toThrow();
  expect(c).toEqual(a + b);
});

/* ==============================
   SKILL 2: Creating a Random Floating-Point Number 🍎
   ==============================
   Explanation:
   - Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).

   TODO: This skill requires 1 line of code.
   TODO: Use the Math object to assign a random number to a variable called rnd.
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('rnd', () => {
  expect(typeof rnd).toBe('number');
  expect(rnd).toBeGreaterThanOrEqual(0);
  expect(rnd).toBeLessThan(1);
});

/* ==============================
   SKILL 3: Creating a Random Integer 🍎
   ==============================
   Explanation:
   - To create a random integer within a range, multiply Math.random() by the range
   - and use Math.floor() to round down.
   - For this exercise, the integer should be between 0 (inclusive) and 5 (exclusive),
   - so possible values are 0, 1, 2, 3, or 4.

   TODO: This skill requires 1 line of code.
   TODO: Use the Math object to assign a random integer to a variable called randomInt,
   TODO: ensuring it is between 0 and 5 (use Math.floor appropriately).
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
vi.spyOn(global.Math, 'random').mockReturnValue(0.9);
vi.spyOn(global.Math, 'random').mockRestore();
test('randomInt', () => {
  expect(typeof randomInt).toBe('number');
  expect(randomInt).toBeGreaterThanOrEqual(0);
  expect(randomInt).toBeLessThan(5);
  expect([0, 1, 2, 3, 4]).toContain(randomInt);
  expect(randomInt).not.toBeGreaterThanOrEqual(5);
  expect(randomInt).not.toBeLessThan(0);
});

/* ==============================
   SKILL 4: Rounding Down a Number with Math.floor() 🍎
   ==============================
   Explanation:
   - Use Math.floor() to round a floating-point number down to its nearest integer.

   TODO: This skill requires 2 lines of code.
   TODO: In line 1, using const, declare a variable called num and assign it the value 17.89.
   TODO: In line 2, declare a variable called numRounded and assign it the value of num rounded down (use Math.floor).
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('numRounded', () => {
  expect(() => {
    // Prove that num is a constant by trying to reassign it.
    num = '🙈';
  }).toThrow();
  expect(typeof num).toBe('number');
  expect(num).toBeCloseTo(17.89);
  expect(typeof numRounded).toBe('number');
  expect(numRounded).toBe(17);
});

/* ==============================
   SKILL 5: Rounding to Nearest Integer 🍎
   ==============================
   Explanation:
   - Use Math.round() to round a number to the nearest integer.
   - This skill requires handling three cases:
   - Values above .5 round up; values exactly .5 round up; values below .5 round down.

   TODO: This skill requires 6 lines of code.
   TODO:
         1. Declare a variable called rounding1 (using let) with the value 5.95.
         2. Round rounding1 to the nearest integer.
         3. Declare a variable called rounding2 (using let) with the value 5.5.
         4. Round rounding2 to the nearest integer.
         5. Declare a variable called rounding3 (using let) with the value 5.05.
         6. Round rounding3 to the nearest integer.
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('rounding', () => {
  expect(typeof rounding1).toBe('number');
  expect(rounding1).toBe(6);
  expect(typeof rounding2).toBe('number');
  expect(rounding2).toBe(6);
  expect(typeof rounding3).toBe('number');
  expect(rounding3).toBe(5);
});

/* ==============================
   SKILL 6: Converting a String to a Number using parseInt() 🍎
   ==============================
   Explanation:
   - parseInt() converts a string to an integer.
   - Be sure to properly escape any characters in the string literal as needed.

   TODO: This skill requires 2 lines of code.
   TODO: In line 1, declare a variable called orderBagels (using let) and assign it the string '13 is a Baker\'s Dozen'.
   TODO: In line 2, declare a constant called bakersDozen and assign it the result of parseInt(orderBagels).
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('bakersDozen', () => {
  expect(() => {
    // Prove immutability by attempting to reassign bakersDozen.
    bakersDozen = '🙈';
  }).toThrow();
  expect(typeof orderBagels).toBe('string');
  expect(orderBagels).toMatch(/^13 is a Baker's Dozen$/);
  expect(typeof bakersDozen).toBe('number');
  expect(bakersDozen).toBe(13);
});

/* ==============================
   SKILL 7: Converting a Number to a String using .toFixed() 🍎
   ==============================
   Explanation:
   - The .toFixed() method converts a number to a string and rounds it to a specified
   - number of decimal places.

   TODO: This skill requires 2 lines of code.
   TODO: In line 1, declare a constant called myPi (using const) and assign it the value 3.141592653589793.
   TODO: In line 2, declare a constant called myPiFixed (using const) and assign it the result
   TODO: of calling myPi.toFixed(4) to get a string with four decimal places.
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('myPiFixed', () => {
  expect(() => {
    // Prove immutability by attempting to reassign myPi.
    myPi = '🙈';
  }).toThrow();
  expect(() => {
    // Prove immutability by attempting to reassign myPiFixed.
    myPiFixed = '🙊';
  }).toThrow();
  expect(typeof myPi).toBe('number');
  expect(myPi).toBeCloseTo(3.141592653589793);
  expect(typeof myPiFixed).toBe('string');
  expect(myPiFixed).toMatch(/^3.1416$/gm);
});

/* ==============================
   SKILL 8: Converting a String to a Number using the Unary + Operator 🍎
   ==============================
   Explanation:
   - The unary + operator converts a string to a number.
   - Here, you convert the string version of myPiFixed back to a number.

   TODO: This skill requires 1 line of code.
   TODO: Using the let keyword, declare a variable called sliceOfPi and assign it to
   TODO: the value of myPiFixed converted to a number using the unary + operator.
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('sliceOfPi', () => {
  expect(() => {
    // Prove immutability by attempting to reassign myPiFixed.
    myPiFixed = '🙊';
  }).toThrow();
  expect(typeof sliceOfPi).toBe('number');
  expect(sliceOfPi).toBeCloseTo(3.1416);
});

/* ==============================
   RECAP & CHALLENGE
   ==============================
   Key Concepts Covered:
     - Basic arithmetic with numbers and immutability using const.
     - Using the Math object for generating random numbers and rounding.
     - Converting between strings and numbers using parseInt, .toFixed(), and the unary + operator.

   Challenge Question:
     - What are the potential pitfalls of type conversion in JavaScript (for example, using parseInt on a string that starts with a number but contains non-numeric characters)?
     (Discuss the behavior of parseInt, parseFloat, and the unary + operator in different scenarios.)
*/
