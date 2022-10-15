/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert")

convert.addEventListener("click", function() {
    const num = document.getElementById("input").value
    length(num)
    volume(num)
    mass(num)
})

function length(val) {
    let text = document.getElementById("length")
    text.innerHTML = `${val} meters = ${(Number(val) * 3.281).toFixed(3)} feet | ${val} feet = ${(Number(val) / 3.281).toFixed(3)} meters`
}

function volume(val) {
    let text = document.getElementById("volume")
    text.innerHTML = `${val} liters = ${(Number(val) * 0.264).toFixed(3)} gallons | ${val} gallons = ${(Number(val) / 0.264).toFixed(3)} liters`
}

function mass(val) {
    let text = document.getElementById("mass")
    text.innerHTML = `${val} kilos = ${(Number(val) * 2.204).toFixed(3)} pounds | ${val} pounds = ${(Number(val) / 2.204).toFixed(3)} kilos`
}