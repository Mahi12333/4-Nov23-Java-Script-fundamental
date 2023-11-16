//1)Arithmetic Operators:-
let a = 5;
let b = 2;

let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus

//2)Comparison Operators:-
let x = 10;
let y = 5;

console.log(x === y); // Equal to
console.log(x !== y); // Not equal to
console.log(x > y);   // Greater than
console.log(x < y);   // Less than
console.log(x >= y);  // Greater than or equal to
console.log(x <= y);  // Less than or equal to

//3)Logical Operators:-
let p = true;
let q = false;

console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p);     // Logical NOT

//4)Assignment Operators:-
let a = 10;
let b = 5;

a += b; // Equivalent to: a = a + b;

//5)Unary Operators:-
let num = 5;

console.log(-num); // Unary negation
console.log(++num); // Increment
console.log(--num); // Decrement

//6)Conditional (Ternary) Operator:-
let age = 20;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";

//7)Bitwise Operators (Advanced):-
let a = 5; // Binary representation: 0101
let b = 3; // Binary representation: 0011

console.log(a & b); // Bitwise AND: 0001 (1 in decimal)
console.log(a | b); // Bitwise OR: 0111 (7 in decimal)
