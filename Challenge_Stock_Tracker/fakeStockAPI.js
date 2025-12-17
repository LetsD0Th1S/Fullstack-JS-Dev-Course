export default function getStockData(){
    let time = new Date()
    return {
        name: 'QTechAI',
        sym: 'QTA',
        price: Math.floor(Math.random()*3+1),
        time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    }
}




