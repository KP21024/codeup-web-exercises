//Define a function named `isAString` that takes in a value and returns true if the input is a string, or false if the input is not a string.
//
//
  //  Define a function named `isNotANumber` that takes in a value and returns true if the input is not a number, or false if the input is a number. This function should consider that numeric strings are not numbers.
//
  //  Define a function named `canBeANumber` that takes in a value and returns true if the input is a number or a numeric string, or false if the input is not a string or if it cannot be parsed to a number.
//
  //  Define a function named `multiplyByTen` that takes in a value, multiplies it by ten, and returns the result. If the input is not a number and is not a numeric string, it returns false.
//
  //  Write a function named `randomNumber` that takes in an input and returns a random number between zero and the value of the input.
//
  //  Write a function that takes in a string and returns the length of the string. If the input is not a string, it should be converted to a string and still return the length of the string.
//
  //  Write a function that takes in two strings. The second string should be a single character. The function should return the index of the second input in the first input. If the second input is more than one character or is not in the first input at all, it should return false.


function isAString(input){
    return typeof input === "string";
}

function isNotANumber(input){
    if (typeof input !== "number"){
        return true;
    } else {
        return false;
    }
}

function canBeANumber(input){
    return typeof parseFloat(input) === "number";
}

function multiplyByTen(input){
    return input *10;
}

function randomNumber(input){
    return(Math.random() * input);
}

function stringLength(string){
    return string.toString().length;
}
function indexOfCharacter(input1, input2) {
    if (input2.length > 1 || input1.indexOf(input2) === -1) {
        input1.indexOf(input2);
    }
}