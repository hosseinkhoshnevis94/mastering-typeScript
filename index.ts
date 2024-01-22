//************************03 - Type Annotation Basics*************************

// String Variable With Explicit Annotation
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
//movieTitle = 9; //GOT AN ERROR : This results in an error!
movieTitle.toUpperCase();

// Number Variable with explicit annotation
let numCatLives: number = 9;
numCatLives += 1;
//numCatLives = "zero"; //GOT AN ERROR!

// Explicitly typed boolean variable:
let gameOver: boolean = false;
gameOver = true;
//gameOver = "true"; //GOT AN ERROR!!

// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
//tvShow = false;GOT AN ERROR

let isFunny = false;
isFunny = true;
//isFunny = "asd"; GOT AN ERROR

// the any type
let thing: any = "hello"; //This is not a great idea!
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
//************************04 - Functions-*************************

// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation:
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);

// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

// Void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
function twoFer(person: string = "you"): string {
    return `One for ${person}, one for me.`;
  }
  
  console.log(twoFer());
  console.log(twoFer("Elvis"));
  
const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  
  console.log(isLeapYear(2012));
  console.log(isLeapYear(2013));

  //************************05 -  Object Types-*************************
  // Objects as parameters:
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// type Point = {
//   x: number;
//   y: number;
// };
type Point = {
  x: number;
  y: number;
  z?: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
 //Nested objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);


const myPoint: Point = { x: 1, y: 3 };

//readOnly
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: "catgurl",
};

console.log(user.id);
user.id;

//Intersection Types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
function getProfit1(movie: Movie): number {
  const {grossWorldwide,budget} = movie.boxOffice
  return grossWorldwide - budget;
}
function getProfit2({ boxOffice: { grossWorldwide, budget } }: Movie): number {
  return grossWorldwide - budget;
}

console.log(getProfit(dune));
console.log(getProfit1(dune));
console.log(getProfit2(dune));
  
//************************06 -  Array Types-*************************

// String array
const activeUsers: string[] = [];
//Another syntax
const activeUsers2: Array<string> = [];

activeUsers.push("Tony");
// activeUsers.push(5)  GOT AN ERROR

// Array of numbers
const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

//Whats the diffrence????
const names2 : (string|number)[] =[]
const names3 : string|number[] =[]
names2.push(5)
names2.push('hello')

// Alternate Syntax:
const bools2: Array<boolean|string> = []
const bools: boolean[] = [];

type Point2 = {
  x: number;
  y: number;
};

const coords: Point2[] = [];
coords.push({ x: 23, y: 8 });

// Multi-dimensional string array
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

type Product = {
  name: string;
  price: number;
};
function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}
  

//************************07 -   Union Types-*************************
  // Basic Union Type:
let age1: number | string = 21;
age = 23;
age1 = "24";

type Point3 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// Union type with type aliases
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// Function parameter union type:
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const nums: number[] = [1,2,3,4]
// const stuff: any[] = [1,2,3,4, true, "asdas", {}]

// const stuff: (number | string)[] = [1,2,3, "das"]
// const stuff: number[] | string[] = ["asd", "asd", 1]

// Union Type With Arrays
const coords2: (Point3 | Loc)[] = [];
coords2.push({ lat: 321.213, long: 23.334 });
coords2.push({ x: 213, y: 43 });

// Literal Types
let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Sunday";

// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;
highScore = 1;
highScore = false;

const stuff: number[] | string[] = [];

// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};
type RGB = {
  r: number;
  g: number;
  b: number;
};
type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors1: (RGB | HSL)[] = [];

// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

const greet1 = (person: string | string[]): void => {
  if (typeof person === "string") {
    console.log(`Hello, ${person}`);
  } else {
    for (let p of person) {
      console.log(`Hello, ${p}`);
    }
  }
};

  
//************************08 -   Tuples and Enums-*************************
  
// These are NOT tuples:
// const stuff: (string | number)[] = [1,'asd', 'asdasd', 'asdasd', 2]
// const color: number[] = [23,45,234,234]

// This is a tuple!TOOpel
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
goodRes.push('new')  //GOT NO ERROR!!: type limitation:

// An array of tuples:
const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

// Enum Example:
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// String Enum:
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

  
//************************09 -   Interfaces--*************************
 
// Point as a TYPE ALIAS
// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 213, y:12}

// Point using an INTERFACE:
interface Point4 {
  x: number;
  y: number;
}

const pt: Point4 = { x: 123, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21837,
  sayHi: () => {
    return "Hello!";
  },
};

thomas.first = "kasjdh";
// thomas.id = 238974;

// Interface Methods
interface Product2 {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

// Interface Methods Parameters
const shoes: Product2 = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Re-opening an interface:
interface Dog1 {
  name: string;
  age: number;
}

interface Dog1 {
  breed: string;
  bark(): string;
}

const elton: Dog1 = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

// Extending an interface:
interface ServiceDog extends Dog1 {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Extending multiple interfaces
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

//Differences between Type Aliases and Interfaces:
//1.Interfaces only can descripe shape and objects
//2. Interfaces can be re-Opened
//3.inheritece is similar between type (&) and interfaces(extends): 

//************************10 -    The TypeScript Compiler--*************************























//************************13 -    TypeScript Classes--*************************
class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!");
  }
  
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  
  get score(): number {
    return this._score;
  }
  
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999999;
  }
}

const elton1 = new Player("Elton", "Steele", 100);
elton1.fullName;
// elton.score = "23";

// Classes With Interfaces!
interface Colorful1 {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful1 {
  constructor(public color: string) {}
}

class Jacket implements Colorful1, Printable {
  constructor(public brand: string, public color: string) {}
  
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("HELLO!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
    ) {
      super(first, last);
    }
    getPay(): number {
      return this.hourlyRate * this.hoursWorked;
    }
  }
  
  const betty = new FullTimeEmployee("Betty", "White", 95000);
  console.log(betty.getPay());
  
  const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
  
  console.log(bill.getPay());
  
  
//************************14 -    Generics--*************************

// Providing a type to querySelector:
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// Without Generics...Lots of Repetition!
function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any{
  //   return item;
  // }
  
  // With A Generic...Super Reusable!
  function identity<T>(item: T): T {
    return item;
  }
  
  identity<number>(7);
  identity<string>("hello");
  
  function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
  }
  
  console.log(getRandomElement<string>(["a", "b", "c"]));
  getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);
  getRandomElement([1, 2, 3, 4]);
  
  // Generics With Constraints:
  function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
      ...object1,
      ...object2,
    };
  }
  
  const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
  console.log(merge({ name: "Colt" }, { num: 9 }));
  merge<{ name: string }, { pets: string[] }>(
    { name: "colt" },
    { pets: ["blue", "elton"] }
    );
    
    interface Lengthy {
      length: number;
    }

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// function printDoubleLength(thing: Lengthy): number {
  //   return thing.length * 2;
  // }
  
  printDoubleLength("asdasd");
  printDoubleLength(234); //Not allowed!
  
  function makeEmptyArray<T = number>(): T[] {
    return [];
  }
  
  const nums = makeEmptyArray();
  const bools = makeEmptyArray<boolean>();
  
  // A Generic Class Example
  interface Song {
    title: string;
    artist: string;
  }
  interface Video {
    title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();



//************************15 -    Type Narrowing--*************************

// Typeof Narrowing:
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

// Truthiness Narrowing:
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD!");
  }
};

// EQUALITY NARROWING
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

// IN Operator Narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(
  getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 })
  );
  
// Instanceof Narrowing:
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

// Instanceof Narrowing:
class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// Type Predicates

interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "Woof!";
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
      case "cow":
        return "Moooo!";
        case "rooster":
          return "Cockadoodledoo!";
          case "sheep":
            return "Baaa!";
            default:
              // We should never make it here, if we handled all cases correctly
              //   const shouldNeverGetHere: never = animal;
              //   return shouldNeverGetHere
              const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));



//************************16 -    Working With Type Declarations--*************************

