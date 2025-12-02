
let count = 0
let countEl = document.querySelector("#count-el")
let saveEl = document.querySelector("#prev-ent")

function myCount(){
    count += 1
    countEl.textContent = count 
}

function save(){
    let current = `${count} - `
    saveEl.textContent += current
    count = 0
    countEl.textContent = count
}

// let lapsCompleted = 0

// function increment(){
//     return lapsCompleted += 1
// }

// let count = 0

// while (count != 3) {
//     increment()
//     console.log(lapsCompleted);
//     count += 1
// }

