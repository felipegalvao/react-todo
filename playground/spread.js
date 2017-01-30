// function add (a, b) {
//     return a+b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));

// var groupA = ['Felipe', 'Jen'];
// var groupB = ['Vikiram'];

// var final = [...groupA, ...groupB];
// console.log(final);

var person = ['Andre', 25];
var personTwo = ['Jen', 29];

function greetPerson(name, age) {
    return ('Hi ' + name + ', you have ' + age + ' years.');
}

console.log(greetPerson(...person));
console.log(greetPerson(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Felipe', ...names];

for (i = 0; i < final.length; i++) {
    console.log("Hi " + final[i]);
}