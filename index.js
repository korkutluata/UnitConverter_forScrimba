/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    let input = inputEl.value

    let metersToFeet = input * 3.281
    let feetToMeters = input / 3.281
    let LitersToGallons = input * 0.264
    let GallonsToLiters = input / 0.264
    let KilogramsToPounds = input * 2.204
    let PoundsToKilograms = input / 2.204

    let lengthEl = document.getElementById("length-el")
    lengthEl.textContent = `${input} meters = ${metersToFeet.toFixed(3)} feet | ${input} feet = ${feetToMeters.toFixed(3)} meters`

    let volumeEl = document.getElementById("volume-el")
    volumeEl.textContent = `${input} Liters = ${LitersToGallons.toFixed(3)} Gallons | ${input} Gallons = ${GallonsToLiters.toFixed(3)} Liters`
    console.log(input)

    let massEl = document.getElementById("mass-el")
    massEl.textContent = `${input} Kilograms = ${KilogramsToPounds.toFixed(3)} Pounds | ${input} Pounds = ${PoundsToKilograms.toFixed(3)} Kilograms`
})


