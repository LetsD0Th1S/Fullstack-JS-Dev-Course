const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEL = document.querySelector("#mass-el")
const convertBtn = document.querySelector("#convert-btn")

const toFeet = 3.28084
const toGallon = 0.264172
const toPound = 2.20462

convertBtn.addEventListener("click", function() {
    let unitVal = Number(document.querySelector("#input-el").value)
    calcLength(unitVal)
    calcVolume(unitVal)
    calcMass(unitVal)
})


function calcLength(val){
    lengthEl.textContent = `${val} meters = ${roundDown(val*toFeet)} feet | ${val} feet = ${roundDown(val/toFeet)} meters`
}

function calcVolume(val){
    volumeEl.textContent = `${val} litres = ${roundDown(val*toGallon)} gallons | ${val} gallons = ${roundDown(val/toGallon)} litres`
}

function calcMass(val){
    massEL.textContent = `${val} kilos = ${roundDown(val*toPound)} pounds | ${val} pounds = ${roundDown(val/toPound)} kilos`
}

function roundDown(num){
    let noDec = num * 1000
    noDec = Math.floor(noDec)
    return noDec/1000
}
