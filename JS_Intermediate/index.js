

// function selectItem(item){
//     let price = 0
//     switch(item.toLowerCase()){
//         case 'coffee':
//             price = 2
//             break
//         case 'sandwiches':
//             price = 5
//             break
//         case 'salad':
//             price = 4
//             break
//         case 'lemon cake':
//             price = 3
//             break
//         default:
//             return `It seems that we don't have ${item} in stock.`
//     }
//     return `You have selected ${item}. That will be R${price}.`
// }

// alert(selectItem('beans'))

// ==========================================================================

//Object destructuring example below
// const dreamHoliday = {
//     destination: 'Bali',
//     activity: 'dive',
//     accommodation: '5-star hotel',
//     companion: 'my wifey'
// }

// const {destination, activity, accommodation, companion} = dreamHoliday

// alert(`For my dream holiday, I'd like to go to ${destination} and ${activity} in the ocean. I'll be living in a ${accommodation} with ${companion}`)

// ==========================================================================

// function displayTrafficLight(light){
//     console.log(light);
    
// }

// setTimeout(displayTrafficLight, 3000, '🚥')

// displayTrafficLight('🚦')

// function logAnswer(answer, points){
//     console.log(`The answer is ${answer}! If you got that right, give yourself ${points} points.`);
    
// }

// console.log("What is the capital of Peru?");

// const ticking = setTimeout(logAnswer,5000,'Lima','10')

// document.querySelector("#stop").addEventListener("click", function(){
//     clearTimeout(ticking)
//     console.log('Cancelling...');
    
// })


// Date Constructor
// const date = new Date().getFullYear()

// console.log(date);

// Error Constructor

function checkUserName(userName){
    if (userName){
        console.log(userName);
        
    }
    else {
        throw new Error('No username provided')
    }
}

checkUserName()

