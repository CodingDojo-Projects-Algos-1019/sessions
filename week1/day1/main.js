

// hoisted above
// console.log(myString);

const myString = `it's a "string"`;
// my_string
// MyString

var array = ['cat', 1, 2, 3, 4, 5, 5];
array.push(90);

console.log('this is a message', myString, array);

// for (var index = 0; index < array.length; index++) {
//   console.log(`this is the index ${index} and the content is ${array[index]}`);
// }

// for (var index in array) {
//   console.log(`index is ${index} and the content is ${array[index]}`);
// }


// for (var element of array) {
//   console.log(`element actually is ${element}`);
// }


var person = {
  'eyes': 'brown',
  "hair": 'blue',
  age: 45,
  key: 'this is a key',
  name: 'Bob'
};

person.height = 6;

for (var key in person) {
  console.log(`key is ${key}`, person[key]);
}



function sayHello(name) {
  console.log(`Hello  ${person.name}!`);

  thing = 'this is a thing';

  person.name = 'George';
}


sayHello();


console.log('thing?', thing);



console.log(person);
