// Activity 1: Creating and Exporting Modules
// task 1
export {addNums, person}
function addNums(a, b) {
    console.log(a + b);
}
// task 2
const person = {
    name: 'coder',
    codes(){
        console.log('he codees');
    }
}

// Activity 2: Named and Default Exports
// task 3
export function subtract( a, b, msg = 'subtraction is') {
    console.log(msg, a - b);
}
export function multiply(a, b, msg = 'multiplication is') {
    console.log(msg, a * b);
}

// task 4
export default function divide(a, b) {
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }    
    console.log(a / b);
}

// Activity 3: Importing Entire Modules
