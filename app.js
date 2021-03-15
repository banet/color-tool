

// javascript

// check to see whether the inpput from the user is a valid
// hex color

//1. flexibility to user to put #000000 or 000000 remove if exissst "#"
// check the length -should be either 3 or 6 characters

//CHALLENGE
//Get a reference to hexInput and inputColor DOM elements
//Create a keyup event handler for hexInput
//Check if hex color is valid
//If hex color is valid, update the background color of inputColor


// Select element
const hexInput = document.querySelector('#hexInput')
const inputColor = document.querySelector('#inputColor')
const slider = document.querySelector('#slider')
const sliderText = document.querySelector('#sliderText')

//add eventListener
hexInput.addEventListener('keyup', checkHexInput)

function checkHexInput() {
    let hex = hexInput.value
    if(!hex) return false
    if(!isValidHex(hex)) return;   
    const strippedHex = hex.replace('#', '')

    inputColor.style.background = "#" + strippedHex
}


const isValidHex = (hex) => {
    if(!hex) return false

    const strippedHex = hex.replace('#', '')
    return strippedHex.length === 3 || strippedHex.length === 6
}
/* Test
 console.log(isValidHex("#000000"))  true
 console.log(isValidHex("#0000000"))  false
 console.log(isValidHex("#ffffff"))  true
 console.log(isValidHex("#fff"))  true
 console.log(isValidHex("fff"))  true
 console.log(isValidHex("ac")) // false 
 */

/* Challenge2 
 -Create a function to convert Hex to RGB
- this should work with 3 or 6 character hex values
- Hint - useParseInt(16) to convert a hex value to a decimal value
- should return an object with 3 properties - r,g, and b
 - Test your function with a few different use cases */

const convertHextoRgb = (hex) => {

    if(!isValidHex(hex)) return null;

    let strippedHex = hex.replace('#', '')

    if(strippedHex.length === 3) {
    strippedHex = strippedHex[0] + strippedHex[0]
    + strippedHex[1] + strippedHex[1]
    + strippedHex[2] + strippedHex[2]
    }
    // Define rgb

    const r = parseInt(strippedHex.substring(0,2), 16)
    const g = parseInt(strippedHex.substring(2,4), 16)
    const b = parseInt(strippedHex.substring(4,6), 16)

    return {r,g,b}
}
console.log(convertHextoRgb('123'))

/**Challenge 3 
 - create function convertRgbtoHex
 - taks 3 paramenter r,g,b
 - for each (r,g,b) create a hex pair that is two characters long
 - return hex value startin with a hashtag
 - example - r.toString(16)
*/
const convertRgbToHex = (r,g,b) => {
   

    const firstPair = ("0"+ r.toString(16)).slice(-2)
    const secondtPair = ("0" + g.toString(16)).slice(-2)
    const thirdPair = ("0" + b.toString(16)).slice(-2)

    const hex = "#" + firstPair + secondtPair + thirdPair
    return hex
}
//console.log(convertRgbToHex(0,255,255))


// Chalenge 4
//get a reference to the slider and sliderText DOM elements
//create an input event listener for slider element
//display the value of the slider 

slider.addEventListener('input', checkSlider)

function checkSlider() {

    sliderText.textContent=`${slider.value + "%"}`
}