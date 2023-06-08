function square(num) {
  return num * num;
}
square(3);
function greet(person) {
  return "Hi there, ".concat(person, "!");
}
greet("Mike Tyson");
var doHomeWork = function (person, age, isDone) {};
doHomeWork("Mike", 25, true);
// default value for function parameter
var greetMsg = function (name) {
  if (name === void 0) {
    name = "Tony";
  }
  return "Hi ".concat(name, "!");
};
greetMsg();
greetMsg("Mony");
// Return Type
var addNum = function (num1, num2) {
  return num1 + num2;
};
addNum(10, 5);
// addNum('ten', 5);
// Anonymous Function Contextual Typing
var colors = ["red", "green", "blue"];
colors.map(function (color) {
  color.toUpperCase();
});
// Void
function printLog(msg) {
  console.log(printLog);
}
// Never
function makeError(msg) {
  throw new Error(msg);
}
function gameLoop() {
  while (true) {
    console.log("Loop Running!");
  }
}
