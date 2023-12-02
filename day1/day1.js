const fs = require('fs');
let fileContent = fs.readFileSync('AdventOfCode/day1/day1input.txt');
let fileContentAsString = fileContent.toString();
let inputArray = fileContentAsString.split('\n');


const cleanInput = (input) => {
    let cleanedArray = [];
    let resultArray = [];
    
    // cleans the input and pushes it to a new array
    for (let i = 0; i < input.length; i++) {
        let cleanedString = input[i].replace(/\D/g, '');
        let cleanedInteger = parseInt(cleanedString);
        cleanedArray.push(cleanedInteger);
    }

    // check for the first int at the start of the element, reverse it, and do it again. concatanate those two numbers together. eg 1abc2 should return the int 12
    for (let i = 0; i < cleanedArray.length; i++) {
        let firstInt = cleanedArray[i].toString().charAt(0);
        let lastInt = cleanedArray[i].toString().charAt(cleanedArray[i].toString().length - 1);
        let concatanatedInt = parseInt(firstInt + lastInt);
        resultArray.push(concatanatedInt);
    }

    // return the sum of the array
    resultArray = resultArray.reduce((a , b) => a + b, 0);
    console.log(resultArray);
    return resultArray;
}

cleanInput(inputArray);