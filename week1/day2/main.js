// Given an array and an additional value,
// insert this value at the beginning of the array.
// Do this without using any built -in array methods.
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pushFront(array, value) {
  // index is a locally scoped variable
  // for (var index = array.length - 1; index >= 0; index--) {
  //   var currentValue = array[index];
  //   console.log('current value is ' + currentValue);
  //   array[index + 1] = currentValue;
  // }
  // array[0] = value;
  // console.log(array);


  // number = 88888;
  // return array;
  return insertAt(array, 0, value);
}

// global variable
var number = 9999;
testArray = pushFront(testArray, number);


console.log(testArray);

// console.log(`value is ${index}`);


/**
 * Insert At
Given an array, index, and additional value, insert the value into array
at given index. Do this without using built-in array methods.
*/

// var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insertAt(array, position, value) {
  for (var index = array.length; index > position; index--) {
    var currentValue = array[index - 1];
    array[index] = currentValue;
  }

  array[position] = value;

  console.log('insert at', array);

  return array;
}

console.log(insertAt(testArray, 5, 9999));



/**

Pop Front
Given an array, remove and return the value at the beginning of the array.
Do this without using any built-in array methods except pop().

*/

function popFront(array) {
  // var value = array[0];


  // console.log(array);
  // return value;

  return removeAt(array, 0);
}

console.log('popFront ', popFront(testArray));

/**
 * Remove At
Given an array and an index into array, remove and return the array value at that index.
Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
 *
*/

// var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeAt(array, position) {
  var value = array[position];

  for (var index = position; index < array.length - 1; index++) {
    var currentValue = array[index + 1];

    array[index] = currentValue;
  }

  array.length--;
  console.log('removing ', array, value);

  return value;
}


console.log(removeAt(testArray, 3));
