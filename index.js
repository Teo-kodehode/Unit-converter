//JS for converting between metric and imperial

//sets variables
let number = document.getElementById("number")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let error = document.getElementById("error")



function calculate(){
if (number.textContent > 0){
//Sets value to text content of number
    let value = number.textContent
//calculates feet conversion
    let feetcon = value*3.2808399

//Calculates meter conversion
    let meterscon = value*0.3048

//Displays the calculation of length
    length.textContent = value + " Meters = " + parseFloat(feetcon.toFixed(3)) + " Feet | " + value + " Feet = " + parseFloat(meterscon.toFixed(3)) + " Meters"



//Calculates gallons conversion
    let gallonscon = value*0.264172052

//Calculates liters conversiron
    let literscon = value*3.78541178

//Displays the calculation of volume
    volume.textContent = value + " Liters = " + parseFloat(gallonscon.toFixed(3)) + " Gallons | " + value + " Gallons = " + parseFloat(literscon.toFixed(3)) + " Liters"
    


//Calculates pound conversion
    let poundscon = value*2.20462262

//calculates kg conversion
    let kilocon = value*0.45359237

//Displays the calculation of mass
    mass.textContent = value + " Kilos = " + parseFloat(poundscon.toFixed(3)) + " Pounds | " + value + " Pounds = " + parseFloat(kilocon.toFixed(3)) + " Kilos"

//Clears error message if its there
    error.textContent = ""
}

else{
    error.textContent = "Error, please input a value thats larger than 0"

}
}