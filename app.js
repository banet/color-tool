

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

// console.log(isValidHex("#000000")) // true
// console.log(isValidHex("#0000000")) // false
// console.log(isValidHex("#ffffff")) // true
// console.log(isValidHex("#fff")) // true
// console.log(isValidHex("fff")) // true
// console.log(isValidHex("ac")) // false