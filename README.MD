# Introduction
Typescript is a very powerful addition to JavaScript. TypeScript is developed by Microsoft and is increasingly supported by the latest technologies like Angular, Vue.js 3, React.js, and many others.

As TypeScript code can be compiled to ES5, it includes all of the JavaScript features such as spread arrow function, deconstructors, and introduces some very useful features such as decorators, generics and interfaces, enums, modules, and many others.

# Types
For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.



## Basic Assign Types

#### String
Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, TypeScript use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

``` ts
  const myName: string = 'Robert';
```

#### Number

As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

``` ts
  const myAge: number = 24;
```

#### Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

``` ts
  const bHasHobbies: boolean = true;
```

#### Array

TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

``` ts
  const hobbies: string[] = ['Programming', 'Cooking'];
```
If no types are declared, TypeScript will automatically assign a type depending on the types of the Array values.

``` ts
  const numbers = [1, 3.22, 6, -1] // This variable will automatically be assigned a number[] array type.

```
**Note that declaring types is encouraged.**

### Tuples

Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

``` ts
  const address: [string, number] = ["Street", 99];
```

### Any
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type:

``` ts
  let myCar: any = 'BMW';

  console.log(myCar); // Prints: BMW

  myCar = { brand: 'BMW', series: 3 };

  console.log(myCar) // Prints: { brand: "BMW", series: 3 }
```

### Enums

A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values. By default, any enum will begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can modify the Green value to 100, the next will be 101, then set Yellow back to 2.

``` ts
enum Color {
    Gray, // 0
    Red, // 1
    Green = 100, // 100
    Blue, // 101
    Yellow = 2 // 2
  }

  const myColor: Color = Color.Green
  console.log(myColor); // Prints: 100

```

### Functions

Functions as you may expect work exactly the same as in JavaScript with a couple new features. In TypeScript, you may assign the function two things:

``` ts
  const myMultiply: (val1: number, val2: number) => number;
  // myMultiply = sayHello; // Not possible.
  // myMultiply(); // Not possible.
  myMultiply = multiply;

  console.log(myMultiply(5, 2));
```

### Void Function Type

The type void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

``` ts
  function sayHello(): void {
    console.log('Hello!');
    // return myName; // Not possible because the function can't return anything due to the void assigned type (more on this below).
  }
```
Declaring variables of type void is not useful because you can only assign undefined or null to them:

``` ts
  let unusable: void = undefined;
```

### Objects

In JavaScript, so as in TypeScript, Objects are comprised of key-value pairs. We can assign types to the object key-value pairs, like so:

``` ts
  let userData: { name: string, age: number } = {
    name: 'Max',
    age: 27
  };
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

```

#### Complex Objects
As you may expect, the assigned types to the object key-value pairs can reach high levels of complexity, for example:

``` ts
  let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3,99, 10],
    output: function(all: boolean): number[] {
      return this.data
    }
  };
  // complex = {}; // Not possible.
```

#### Optional object properties

In TypeScript, all newly declared object properties (including both function parameters, and interface properties) may be declared as optional. To do so, we must place a ? character after the key (or name) of the property when declaring it (a postfix notation). Here's an example:

``` ts
  const right: { name: string, age?: number } = {
    name: 'Robert'
  };

  const alsoRight: { name: string, age?: number } = {
    name: 'Robert',
    age: 24
  };

  // This is not possible because the name key-value pair is missing.
  // const wrong: { name: string, age?: number } = {
  //   age: 24
  // };
```

### Alias 
Writing complex and long types can quickly become dull and impractical. For a DRY approach, it's possible to create aliases for types, essentially creating your own types. Here's an example using the complex object above:

``` ts
  type Complex = { data: number[], output: (all: boolean) => number[] };

  let complex2: Complex  = {
    data: [100, 3,99, 10],
    output: function(all: boolean): number[] {
      return this.data
    }
  };
```

### Union
Variables are not restricted to only one assigned type. This is where union types come in where we can assign two or more types (e.g. assign number and string) to a single variable. For example:

``` ts
  let myRealRealAge: number | string = 24;
  myRealRealAge = '24';
  // myRealRealAge = true // Not possible since myRealRealAge only accepts a number or a string.

```

## Check
Programmatically checking for types work exactly as it works in JavaScript:

``` ts
  let finalValue = 'A string';
  if (typeof finalValue == 'string') {
    console.log('finalValue is a string');
  }
```

## Never

The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.

``` ts
  function neverReturns(): never {
    throw new Error('An error!');
  }
```

## Nullable

In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

``` ts
  let canBeNull: null | number = 12;

  canBeNull = null;
  let canAlsoBeNull;
  canAlsoBeNull = null;
  let canThisBeAny = null;
  canThisBeAny = 12;
```

## Type Assertions

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type. Type assertions are a way to tell the compiler “trust me, I know what I’m doing”. A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax, which is fine, except for JSX (read React) code because JSX works with angle-bracket syntax itself:

``` ts
  const someValue: any = "this is a string";
  const strLength: number = (<string>someValue).length;

```
And the other is the one used with JSX, namely the as-syntax:

``` ts
  const someValue: any = "this is a string";
  const strLength: number = (someValue as string).length;

```

# ES6

TypeScript natively supports the newer ES6 (A.K.A. ECMAScript 6 and ECMAScript 2015) JavaScript features. As you may have guessed, we can assign types to these new features (e.g. assigning types to an arrow function). Here are some examples:

## Template Literals

``` ts
  const userName = 'Harry';
  const greeting = `Hello I'm ${userName}`;

  console.log(greeting)
```

## Arrow Functions
Arrow function arguments can be assigned any type.

```ts
  const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);

  greet('Suker');
```

## Default Parameters
Arrow functions may also be defined with default argument values in case no respective arguments were passed, these default parameters may also be of any assigned type.

```ts
  const greet = (name: string = 'Suman') => console.log(`Hello, ${name}`);

  greet(); // Prints: "Suman"
```

## Spread Operators

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

``` ts
  const numbers: number[] = [-3, 33, 38, 5];

  console.log(Math.min(...numbers));

  const newArray: number[] = [55, 20, ...numbers];

  console.log(newArray);

```

## Array Destructuring

Arrays may also be destructured in TypeScript, keep in mind that all the assigned types to the array values won't be lost when destructured.

``` ts
  const testResults: number[] = [3.89, 2.99, 1.38];
  const [result1, result2, result3] = testResults;

  console.log(result1, result2, result3);
```

## Object Destructuring

Just like arrays, the destructured object value pairs will keep their previously assigned types. Keep in mind that when destructuring an object, the declared variable name must match the object key to let the compiler know which variable to destructure.

``` ts
const scientist: { firstName: string, experience: number } = { firstName: 'Robert', experience: 9000 };
  const { firstName, experience } = scientist;

  console.log(firstName, experience);
```


## Classes

Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are built from these classes. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript.

TypeScript offers public, private, and protected modifiers to every class member variable. Unlike C# which requires that each member be explicitly labeled public, In TypeScript, each member is public by default.

**You may still mark a member public explicitly. For example:**


``` ts
class Person {
    private type: string | null = null;
    protected age: number = 23;

    constructor(public name: string, public userName: string, private email: string) {
      this.name = name;
      this.userName = userName;
      this.email = email;
    }

    public printAge = () => {
      console.log(this.age);
      this.setType('Young guy');
    }

    private setType = (type: string) => {
      this.type = type;
      console.log(this.type);
    }
  }

  const person = new Person('Francisco', 'rmolinamir', 'example@email.com');
  person.printAge(); // Prints: 23
  // person.setType('Cool guy'); // Not possible, since setType is a private member of Person.

```

## Private Members

When a member is marked private, it cannot be accessed from outside of its containing class. However, should a class X inherit properties from Person, class A will be able to access all private properties from Person (e.g. type and setType) due to being inside (or having access to) the protected scope. More on what class inheritance is all about just below, but here's an example;

``` ts 
class Type {
      private type: string | null = null;

      setType = (type: string) => {
        this.type = type;
        console.log(this.type);
      }
  }

  class Person extends Type {
      protected age: number = 23;

      constructor(public name: string, public userName: string, private email: string) {
        super()
        this.name = name;
        this.userName = userName;
        this.email = email;
      }

      public printAge = () => {
        console.log(this.age);
        this.setType('Young guy');
      }
  }

  const person = new Person('Rob', 'rm', 'email');

  person.setType('Cool guy'); // Prints: Cool guy

  console.log(person); // Prints:
  /**
   * Person
   *
   * age: 23
   * email: "email"
   * name: "Rob"
   * printAge: ƒ ()
   * setType: ƒ (type)
   * type: "Cool guy"
   * userName: "rm"
   *
   */

```


If you want to prevent some properties or classes for being inherited, there is currently a proposal for the `final` keyword to be added.

Links:

- [Suggestion: Final keyword for classes and methods](https://github.com/Microsoft/TypeScript/issues/9264)
- [Support final classes (non-subclassable)](https://github.com/Microsoft/TypeScript/issues/8306)


## Class Inheritance

Classes may also be extended. By extending a class, we can declare another class that inherits all of the parent class members, for example:

```ts
  class Prashant extends Person {
    constructor(userName: string, email: string) {
      super('Hari narayan', userName, email);
      this.age = 25;
      this.printAge()
    }
  }

  const prashant = new Prashant('Prashant', 'example@email.com');

  console.log(prashant);


```
The class Prashant, would be able to access all of the Person members, and overwrite them if possible. Note that super has to be called in the constructor of the Prashant class, to execute any logic that may be stored inside the parent Person class' constructor. If not called, side effects may happen.

## Getters & Setters

TypeScript offers two great features for classes: get, and set. These are keywords that can be used to create a getter or setter function that can share the same name, and run whatever logic the programmer decides to pass into. Here's an example:

``` ts
  class Plant {
    private _species: string = 'Default';
    get species() {
      return this._species;
    }
    set species(value: string) {
      if (value.length > 3) {
        this._species = value;
      } else {
        this._species = 'Default';
      }
    }
    public getSpecies = () => this._species
  }

  const plant = new Plant();

  console.log(plant.species); // Prints Default
  plant.species = 'AB';
  console.log(plant.species); // Prints Default
  plant.species = 'Green Plant';
  console.log(plant.species); // Prints Green Plant
```
To set species, we would do an expression such as plant.species = 'AB';, and to get species, we would simply refer to the species property of the plant object.


## Static Properties & Methods

Static properties and methods are class members that can be accessed from an outer scope of the class, and without having to instantiate the class either. Here's an example:

``` ts
  class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
      return this.PI * diameter;
    }
  }

  console.log(Helpers.PI); // Prints: 3.14
  console.log(2 * Helpers.PI); // Prints: 6.28
  console.log(Helpers.calcCircumference(10)); // Prints: 31.42

```

## Abstract Classes

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

A great comparison and example for abstract classes is the React.js Component class, that we use to extend our own custom components, like the typical:


``` react
  class App extends Component {
    ...
  }
```

The following is an example of a TypeScript abstract class definition:


``` ts
  abstract class Project {
    projectName: string = 'Default';
    budget: number = 0;
    abstract changeName(name: string): void;
    calcBudget() {
      return this.budget * 2;
    }
  }
```

Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes. Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. However, abstract methods must include the abstract keyword and may optionally include access modifiers.

**Think of abstract methods as methods that won't be passed down to the inheritor classes.**

```ts
class ITProject extends Project {
    changeName = (name: string) => {
      this.projectName = name;
    }
  }

  const newProject = new ITProject();

  console.log(newProject) // Prints: { projectName: "Default", budget: 0, ...  }
  newProject.changeName('Super IT Project');
  console.log(newProject); // Prints: { projectName: "'Super IT Project", budget: 0, ...  }
  newProject.budget = 1000;
  console.log(newProject.budget); // Prints: 1000
  console.log(newProject.calcBudget()); // Prints: 2000


```

## Private Constructors & Singletons

At first glance you may realize that private constructors sound strange, you might ask yourself, what's the point of making the constructor method private, resulting in the programmer not being able to call the new method, which then makes creating new instances of the class impossible? Quite the contrary.

As the name of this section implies, a singleton is a class that can only be instantiated once, or in other words, a class that can only have one object, single(ton).

In TypeScript 2.0 and onwards, we can create a static class member method that I usually define as getInstance. Since getInstance is a member of the class, it can access the constructor. Meaning, it can execute the constructor, then save the instance as a member of the same class. It is also possible to improve this further, and only allow getInstance to be executed only once, and avoid multiple instances of this class.

If it already exists, we can always return the previously created instance, here's an example with a class named OnlyOne:

``` ts
  class OnlyOne {
    private static instance: OnlyOne; // Member variable that will store the OnlyOne instance.

    /**
     * Read only property that can not be modified nor accessed outside of the class.
     */
    private constructor(public readonly name: string) {}

    /**
     * If get instance has not been initialized then it will construct a new OnlyOne class object,
     * then store it into the instance property. If it has already been created then it will simply
     * return the instance property.
     * This assures that there will only ever be one instance.
     */
    static getInstance() {
      if (!OnlyOne.instance) {
        OnlyOne.instance = new OnlyOne('The Only One');
      }
      return OnlyOne.instance;
    }
  }

  // const wrongWay = new OnlyOne('The Only One') // Not Possible
  const rightWay = OnlyOne.getInstance();
  const anotherWay = OnlyOne.getInstance(); // Works too.

```

In the above example, the variables rightWay and anotherWay would be pointers (think C++) to the same instance of OnlyOne. As you can see, to initiate OnlyOne we have to call getInstance instead of running the constructor from an outter scope of the OnlyOne class.

Afterwards, it is possible to call any of the other public methods of the class. You'd use this for things like managing global toast messages inside an application, with a single class instance managing every message. Another common use case is when front-end code (e.g. React/Vue/Angular) speaks to a backend such as Amazon's AWS or Google's Firebase platforms. In that case you'd use the AWS or Firebase SDK inside the frontent to create a singleton class instance inside the client device. That singleton class instance would provide the frontend code with all kinds of utility methods, such as, for example, backend specific methods to store data from the frontend into some backend storage e.g. Firebase's firestore database or Amazon's S3 storage bucket.


## Modules

Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

The module code generation may be specified in the tsconfig.json file. The compiler will generate appropriate code for Node.js (CommonJS), requirejs (AMD), UMD, SystemJS, or ECMAScript 2015 native modules (ES6) module-loading systems depending on what the tsconfig.json module option is set on. For example, the React.js tsconfig.json file generated when using create-react-app module code generation option is esnext, targeted to es5.

In TypeScript, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

1. Export
2. Default Exports
3. Import
4. Advanced Module Loading

### Export

Any declaration (such as a variable, function, class, type alias, enum or interface) can be exported by adding the export keyword.

Exporting a variable and a function:

``` ts
export const PI = 3.14;

  export const calculateCircumference = (diameter: number) => {
    return diameter * PI;
  }

```

Exporting an interface for a react.js class component's state:

```ts 
  export interface IAppState {
    counterValue: number;
  }

  class App extends React.Component<{} /* IAppProps */, IAppState> {
    public state = { counterValue: 0 }; // State is required to be public.
    // ...
  }
```
Exporting an interface for a react.js functional component onClick handlers:

```ts
  export enum ECounterHandlers {
    Inc,
    Dec
  }
  interface ICounterOutputProps {
    counter: number;
    onClick: (mode: ECounterHandlers) => void;
  }
  const counterOutput = (props: ICounterOutputProps) => {
    return (
      /// ...
        <button onClick={() => props.onClick(ECounterHandlers.Dec)}>Decrement</button>
        <button onClick={() => props.onClick(ECounterHandlers.Inc)}>Increment</button>
      /// ...
    );
  }
```

### Default Exports

Each module can optionally export a default export. Default exports are marked with the keyword default; and there can only be one default export per module. default exports are imported using a different import form.

The default exports are really handy. For instance, a library like React.js might have a default export of React, commonly imported under the name React. Each file may only have one default export, for example:

``` ts
  const calculateRectangle = (width: number, length: number) => {
    return width * length;
  }

  export default calculateRectangle
```

### Import

Importing is just about as easy as exporting from a module.

Importing an exported declaration is done through using the import keyword. For example, considering the PI, calculateCircumference, and calculateRectangle export examples shown above, this is how we would import them into our app.ts file with the following folder structure:

### Organization scheme:

```ts
TypeScript v^3.0
├── app.ts
├── src
│   ├── circle.ts
│   ├── rectangle.ts
```

```ts
  import { PI, calculateCircumference } from './src/circle'
  import calculateRectangle from './src/rectangle'

  console.log(PI); // Prints: 3.14
  console.log(calculateCircumference(10)); // Prints: 31.42
  console.log(calculateRectangle(5, 10)); // Prints: 50

```

