
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color)
var color === prompt("what color do you like")
if (color === "blue")[{
    alert("blue is your color")
)
}if else (color === "red"){
    alert("red is your color")
}  else {
    alert("thats my fav color too")
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function analyzeColor(color)
var color === prompt("what color do you like")
if (color === "blue")[{
    alert("blue is your color")
)
}if else (color === "red"){
    alert("red is your color")
}  else {
    alert("thats my fav color too")
}
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function caculateTotal(luckyNum, totalAmount){
var discountedPrice = totalAmount
    if(luckyNum === 0){
    discountedPrice = totalAmount
} else if(luckyNum === 1) {
        discountedPrice = totalAmount - (totalAmount * .1)
    }else if(luckyNum === 2){
        discountedPrice - (totalAmount * .2)
    } else if(luckyNum === 3) {
        discountedPrice - (totalAmount * .35)
    } else if(luckyNum === 4) {
        discountedPrice - (totalAmount / 2)
    } else if(luckyNum === 5){
        discountedPrice = 0

    }

    return discountedPrice

}
console.log(caculateTotal())



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 5);
var userBill = prompt("how much was your bill")
calclateTotal(luckyNumber, userBill)


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
    function number(enterNumber = 2){
        var enterNumber = prompt("number even or odd")
        if(enterNumber == 2 ) {
            prompt("your number positive or negitive")
        } if else(enterNumber =< 2){
prompt("whats your number plus 100")
}else{
            alert("what was your number again")
} return enterNumber
    }