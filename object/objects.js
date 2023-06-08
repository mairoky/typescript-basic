// Example of JS Object
var person = {
    name: "Thomas",
    age: 26,
    occupation: "Actor",
};
// TypeScript Object
var person2 = {
    name: "Thomas",
    age: 25,
    occupation: "Actor",
};
var printName = function (person) {
    return "Person Name is ".concat(person.first, " ").concat(person.last);
};
console.log(printName({ first: "Thomas", last: "Shelby" }));
