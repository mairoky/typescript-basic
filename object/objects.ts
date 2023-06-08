// Example of JS Object
const person = {
  name: "Thomas",
  age: 26,
  occupation: "Actor",
};

// TypeScript Object
const person2: {
  name: string;
  age: number;
  occupation: string;
} = {
  name: "Thomas",
  age: 25,
  occupation: "Actor",
};

const printName = (person: { first: string; last: string }): string => {
  return `Person Name is ${person.first} ${person.last}`;
};
console.log(printName({ first: "Thomas", last: "Shelby" }));

// Nested Object

type Song = {
  title: string;
  singer: string;
  viewsCount: number;
  credit: {
    producer: string;
    writer: string;
  };
};

function calculateEarning(song: Song): number {
  return song.viewsCount * 0.1;
}

const mySong: Song = {
  title: "Numb",
  singer: "Linkin Park",
  viewsCount: 2563521,
  credit: {
    producer: "Mr Asdf",
    writer: "Mr Zxc",
  },
};

// Optional property
type MyPoint = {
  x: number;
  y: number;
  z?: number;
};

const myExPoint: MyPoint = { x: 12, y: 23, z: 33 };

// Readonly modifier
type User = {
  readonly id: number;
  username: string;
};
const user: User = {
  id: 123456,
  username: "thomas_shelby",
};

console.log(user.id);

// Intersection Type

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 12,
  color: "Red",
};

type Animal = {
  age: number;
  breed: string;
};

type ColorfulAnimal = Colorful &
  Animal & {
    gender: string;
  };

const listy: ColorfulAnimal = {
  color: "Green",
  age: 12,
  breed: "Moyna",
  gender: "Female",
};
