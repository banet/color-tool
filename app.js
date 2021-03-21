

//1. flexibility to user to put #000000 or 000000 remove if exissst "#"
// check the length -should be either 3 or 6 characters

/* CHALLENGE 1
* Get a reference to hexInput and inputColor DOM elements
* Create a keyup event handler for hexInputCheck if hex color is valid
* If hex color is valid, update the background color of inputColor 
*/
/* Challenge2 
 -Create a function to convert Hex to RGB
- this should work with 3 or 6 character hex values
- Hint - useParseInt(16) to convert a hex value to a decimal value
- should return an object with 3 properties - r,g, and b
 - Test your function with a few different use cases 
 */

/**Challenge 3 
 - create function convertRgbtoHex
 - taks 3 paramenter r,g,b
 - for each (r,g,b) create a hex pair that is two characters long
 - return hex value startin with a hashtag
 - example - r.toString(16)
*/
/*Chalenge 4
* get a reference to the slider and sliderText DOM elements
* create an input event listener for slider element
* display the value of the slider 
*/

/* Challenge 5 
Create the alterColor function which accepts hex value and percentage
convert the hex value to rgb
increase each r,g,b value by appropriate amount (percentage of 255)
use the new r,g,b values to convert to a hex value
return the hex value
*/
/*Challenge 6 RESET FUNCTION
 * Set slider value to 0 and slidet text to 0%
 * Set altered color to original input color
 * Reset alteredColorText to original input
 * call reset in toggleBtn click handler
 * call reset in hexInput keyup handler
 * 
 */



// Select element
const hexInput = document.querySelector('#hexInput')
const inputColor = document.querySelector('#inputColor')
const slider = document.querySelector('#slider')
const sliderText = document.querySelector('#sliderText')
const alterBox = document.querySelector('#alteredColor')
const alterColoText = document.querySelector('#alteredColorText')
const toggleBtn = document.querySelector("#toggleBtn")
const innerBtn = document.querySelector('.inner-circle')
const container = document.querySelector('.container')
const lighteText = document.querySelector('.lighten')
const darkenText = document.querySelector('.darken')

//add eventListener
hexInput.addEventListener('keyup', checkHexInput)

function checkHexInput() {
    let hex = hexInput.value
    if(!hex) return false
    if(!isValidHex(hex)) return;   
    const strippedHex = hex.replace('#', '')

    inputColor.style.background = "#" + strippedHex
    resetSlider()
}


const isValidHex = (hex) => {
    if(!hex) return false

    const strippedHex = hex.replace('#', '')
    return strippedHex.length === 3 || strippedHex.length === 6
}




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
//console.log(convertHextoRgb('123'))


const convertRgbToHex = (r,g,b) => {
   

    const firstPair = ("0"+ r.toString(16)).slice(-2)
    const secondtPair = ("0" + g.toString(16)).slice(-2)
    const thirdPair = ("0" + b.toString(16)).slice(-2)

    const hex = "#" + firstPair + secondtPair + thirdPair
    return hex
}
//console.log(convertRgbToHex(0,255,255))



slider.addEventListener('input', checkSlider)

function checkSlider() {
    // Check if the hex color valid
    if(!isValidHex(hexInput.value)) return;

    sliderText.textContent=`${slider.value}%`

    // calculate the appropriate valjue for the color alteration
    // between positive and negative
    const valueAlteredColor = 
    toggleBtn.classList.contains('change') ?
    -slider.value
    : slider.value

    // get the altered hex value (call altere functiopn and update altered box)
    const alterHex = alterColor(hexInput.value, valueAlteredColor)
    // update the backgrundcolor on alterBox
    alterBox.style.backgroundColor =alterHex
    alterColoText.innerText = `Altered Color ${alterHex}` 

}


function resetSlider() {
    slider.value=0;
    sliderText.textContent = `0%`
    alterBox.style.backgroundColor = hexInput.value;
    alterColoText.innerText = `Altered Color ${hexInput.value}` 

}

// Create a function for range between 0 -255
const increaseWithin0To255 = (hex, amount) => {
    // const newHex = hex + amount
    // if(newHex > 255) return 255
    // if(newHex < 0) return 0
    // return newHex
    return Math.min(255, Math.max(0, hex + amount))
}

const alterColor = (hex, percentage ) => {
    const {r,g,b} = convertHextoRgb(hex)

    const amount = Math.floor((percentage/100)*255)

   const newR = increaseWithin0To255(r, amount)
   const newG = increaseWithin0To255(g,amount)
   const newB = increaseWithin0To255(b,amount)
   //console.log(newR, newG,newB)
   return convertRgbToHex(newR, newG, newB)
}

// Toggle button

toggleBtn.addEventListener('click', changeButton)

function changeButton() {
    
    if(toggleBtn.classList.contains('change')) {
       // lighteText.classList.add('uselected')
        toggleBtn.classList.remove('change')
        lighteText.classList.remove('unselected')
        darkenText.classList.add('unselected')

    }
    else {
        toggleBtn.classList.add('change')
        lighteText.classList.add('unselected')
        darkenText.classList.remove('unselected')
        
    }
        resetSlider() 
}

 
