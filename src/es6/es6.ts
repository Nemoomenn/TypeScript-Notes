// Template Literals
const userName = 'jerry';
const greeting = `Hello ${userName}`;
console.log(greeting);

// Arrow Function
const double = (value: number) => value * 2;
console.log(double(5));

// dafault values
const greet = (name: string = 'Lance') => console.log(`Hello, ${name}`);
greet('Lancer');

// Spread Operator
const numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Array Destructuring
const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Object Destructuring
const scientist: { firstName: string, experience: number } = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);

