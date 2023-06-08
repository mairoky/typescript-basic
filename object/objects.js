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
function calculateEarning(song) {
    return song.viewsCount * 0.1;
}
var mySong = {
    title: "Numb",
    singer: "Linkin Park",
    viewsCount: 2563521,
    credit: {
        producer: "Mr Asdf",
        writer: "Mr Zxc",
    },
};
var myExPoint = { x: 12, y: 23, z: 33 };
var user = {
    id: 123456,
    username: "thomas_shelby",
};
console.log(user.id);
var happyFace = {
    radius: 12,
    color: "Red",
};
var listy = {
    color: "Green",
    age: 12,
    breed: "Moyna",
    gender: "Female",
};
