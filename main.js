let display = document.getElementById('display')
let clear = document.getElementById('clear')
let equals = document.getElementById('equals')

let buttons = document.querySelectorAll('.number-button')

for (let button of buttons) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText
        console.log('button clicked')
    })
}

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
})

clear.addEventListener('click', () => {
    display.innerText = ""
})


 
































// let button1 = document.getElementById('1')
// let button2 = document.getElementById('2')
// let button3 = document.getElementById('3')
// let button4 = document.getElementById('4')
// let button5 = document.getElementById('5')
// let button6 = document.getElementById('6')
// let button7 = document.getElementById('7')
// let button8 = document.getElementById('8')
// let button9 = document.getElementById('9')
// let button0 = document.getElementById('0')
// let buttonClear = document.getElementById('C')
// let buttonDiv = document.getElementById('/')
// let buttonMult = document.getElementById('*')
// let buttonAdd = document.getElementById('+')
// let buttonSub = document.getElementById('-')
// let buttonEqual = document.getElementById('=')
// let buttonDecimal = document.getElementById('.')
// let operation = document.getElementById('operation')

// button1.addEventListener('click', () => {
//     operation.textContent +=1;
//     });

// let buttons = document.querySelectorAll('.number-button')
// console.log(buttons)

// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         display.innerText += button.innerText
//     })
// }
    
// let equals = document.getElementById('=')

// // equals.addEventListener('click', () => {
// //     display.innerText = eval(display.innerText)
// // })