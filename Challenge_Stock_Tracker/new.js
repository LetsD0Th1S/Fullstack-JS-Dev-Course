function getStockData(){
    return {
        name: 'QTechAI',
        sym: 'QTA',
        price: (Math.random()*3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}

const arrowArr = ["🟢","🟡","🔴"]
let prevPrice = null



function renderStockTicker(){
    const {name,sym,price,time} = getStockData()
    const stockName = document.querySelector('#stock-name')
    const stockSym = document.querySelector('#stock-symbol')
    const stockPrice = document.querySelector('#stock-price')
    const stockTime = document.querySelector('#stock-time')
    const priceImg = prevPrice < price ? arrowArr[0] :prevPrice === price ? arrowArr[1] : arrowArr[2]

    stockName.textContent = "Name:  " + name
    stockSym.textContent = "Symbol:  " + sym
    stockPrice.textContent = `Price:  ${priceImg} ${price}`
    stockTime.textContent = "Time:  " + time

    

    prevPrice = price
}

setInterval(() => {
    renderStockTicker()
}, 1500);


