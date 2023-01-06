/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
toFixed(3) to round the number to 3 decimals places
*/
const lPara = document.getElementById("length-para")
const mPara = document.getElementById("mass-para")
const vPara =  document.getElementById("volume-para")
const convertBtn = document.getElementById("convert-btn")
const userInput = document.getElementById("user-input")

convertBtn.addEventListener("click", function(){
     userInputValue = userInput.value
     lPara.textContent = `${userInputValue} meters = ${(userInputValue*3.281).toFixed(3)} feet | ${userInputValue} feet = ${(userInputValue/3.281).toFixed(3)} meters`
     vPara.textContent = `${userInputValue} liters = ${(userInputValue*0.264).toFixed(3)} gallons | ${userInputValue} gallons = ${(userInputValue/0.264).toFixed(3)} liters`
     mPara.textContent = `${userInputValue} kilos = ${(userInputValue*2.204).toFixed(3)} pounds | ${userInputValue} pounds = ${(userInputValue/2.204).toFixed(3)} kilos`
})




// `${userInputValue} meters = ${userInputValue*3.281} feet | ${userInputValue} feet = ${userInputValue/3.281} meters`
//     `${userInputValue} liters = ${userInputValue/0.264} gallons | ${userInputValue} gallons = ${userInputValue*0.264} liters`
//     `${userInputValue} kilos = ${userInputValue*3.281} pounds | ${userInputValue} pounds = ${userInputValue/3.281} kilos`