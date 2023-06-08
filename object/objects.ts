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
