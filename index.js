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
    let feetcon = value*3.280

//Calculates meter conversion
    let meterscon = value*0.304

//Displays the calculation of length
    length.textContent = value + " Meters = " + feetcon.toPrecision(4) + " Feet | " + value + " Feet = " + meterscon.toPrecision(4) + " Meters"



//Calculates gallons conversion
    let gallonscon = value*0.264

//Calculates liters conversiron
    let literscon = value*3.785

//Displays the calculation of volume
    volume.textContent = value + " Liters = " + gallonscon.toPrecision(4) + " Gallons | " + value + " Gallons = " + literscon.toPrecision(4) + " Liters"
    


//Calculates pound conversion
    let poundscon = value*2.204

//calculates kg conversion
    let kilocon = value*0.453

//Displays the calculation of mass
    mass.textContent = value + " Kilos = " + poundscon.toPrecision(4) + " Pounds | " + value + " Pounds = " + kilocon.toPrecision(4) + " Kilos"

//Clears error message if its there
    error.textContent = ""
}

else{
    error.textContent = "Error, please input a value thats larger than 0"

}
}