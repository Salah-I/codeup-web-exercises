"use strict";
var inputString = "trick or treat"
var inputArray = inputString.split("")
inputArray.forEach(function(element, index) {
    console.log("[" + index + "] " + element);
});
// * the math.random to get a number from 0 - 100
let randomNum = Math.random() * 2;
console.log(randomNum);


//rounds the number
let  index = (Math.round(randomNum))
console.log(index);

//ROUNDS DOWN
var index = Math.floor(randomNum)
console.log(index);
//pick a random string from out array above
let randomWord = inputArray[index];
console.log(randomWord);


//rounds up
index = Math.ceil(randomNum);
"random up(with ceil)"
randomWord = inputArray[index];





