function square(num: number) {
  return num * num;
}
square(3);

function greet(person: string) {
  return `Hi there, ${person}!`;
}
greet("Mike Tyson");

const doHomeWork = (person: string, age: number, isDone: boolean) => {};
doHomeWork("Mike", 25, true);

// default value for function parameter
const greetMsg = (name: string = "Tony") => {
  return `Hi ${name}!`;
};
greetMsg();
greetMsg("Mony");

// Return Type
const addNum = (num1: number, num2: number): number => {
  return num1 + num2;
};
addNum(10, 5);
// addNum('ten', 5);

// Anonymous Function Contextual Typing
const colors = ["red", "green", "blue"];
colors.map((color) => {
  color.toUpperCase();
});

// Void
function printLog(msg: string): void {
  console.log(printLog);
}

// Never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Loop Running!");
  }
}
