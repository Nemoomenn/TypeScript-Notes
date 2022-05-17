// string
let myName = 'Robert';

// number
let myAge = 25;

// boolean
let bHasHobbies = true;

// assign types
let myRealAge: number;
myRealAge = 21;

// array
let hobbies: string[] = ['Riding, Hiking'];
console.log(hobbies[0]);

// tuples
let address: [string, number] = ["superman", 69];

// enums
enum Color {
    Gray, // 0
    Red, // 1
    Green = 100, // 100
    Blue, // 101
    Black // 2
}

let myColor: Color = Color.Green
console.log(myColor); // Prints: 100

// any
let myCar: any = 'BMW';
console.log(myCar);
myCar = { brand: 'BMW', series: 3 };
console.log(myCar) // Prints: [Object object]

// functions
function returnMyName(): string {
    return 'Robert';
}
console.log(returnMyName());

// void
function sayHello():void {
    console.log('Hello World');
}

// argument types
function multiply(value1:number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply('Robert', 5)) // Not possible.
console.log(multiply(10,5)) // Prints: 50

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // Not possible.
// myMultiply(); // Not possible.
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: {name: string, age: number} = {
    name: 'Max',
    age: 23
}

// userData = { // Not valid
//   name: 2,
//   age: 'Age'
// };
// userData = { // Not valid
//   a: 'Robert',
//   b: 24
// };

userData = {
    name: 'Robert',
    age: 24
  };


// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex  = {
  data: [100, 3,99, 10],
  output: function(all: boolean): number[] {
    return this.data
  }
};

// union types
let myRealRealAge: number | string = 24;
myRealRealAge = '24';
// myRealRealAge = true // Not possible.

// check types
let myText = 'A simple text';
if (typeof myText === 'string'){
    console.log('My text is string');
}

// never type
function neverReturns(): never {
    throw new Error('An Error!');
}

// nullable types
let canBeNull: null | number = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;

// exercise
type BankAccount = { money: number, deposit: (value: number) => void}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: 'Maxi',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Riding']
};

myself.bankAccount.deposit(2000);

console.log(myself);    
