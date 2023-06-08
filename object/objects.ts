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
