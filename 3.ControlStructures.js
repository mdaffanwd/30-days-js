const prompt = require('prompt-sync')();

// --> Activity 1: If-Else Statements <--
let num = prompt('enter number to check whether is positive or negative')

if(num > 0){
    console.log(`Entered num is ${num} and it's positive`)
}else if(num < 0){
    console.log(`Entered num is ${num} and it's negative`)
}else{
    console.log(`Entered num is ${num} and it's 0`)
}

//Task 2
let age = prompt('enter your age')

if(age >= 18){
    console.log(`Entered age is ${age} and you're eligible to vote`)
}else if(age < 0){
    console.log(`Entered age is ${age} and it's invalid`)
}else if(age === null){
    console.log('please, enter your age')
}else{
    console.log(`You're not eligible to vote`)
}


// --> Activity 2: Nested If-Else Statements <--

// Task 3
let a = Number(prompt("Enter the number a: "));
let b = Number(prompt("Enter the number b: "));
let c = Number(prompt("Enter the number c: "));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input, please enter valid numbers');
} else {
    if(a === 0 && b === 0 && c === 0){
        console.log(`Please enter the value of greater than 0`);
    }
    else if (a >= b && a >= c) {
        console.log(`a: ${a} is the largest`);
    } else if (b >= a && b >= c) {
        console.log(`b: ${b} is the largest`);
    } else {
        console.log(`c: ${c} is the largest`);
    }
    console.log(`You entered: a = ${a}, b = ${b}, c = ${c}`);

}

// --> Activity 3: Switch Case <--
// Task 1
let firstDayChoice = prompt('Do you want the first day of the week to be Sunday or Monday? (Enter "Sunday" or "Monday")').toLowerCase();
let dayNumber = Number(prompt('Enter a number between 1 and 7:'));

if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    console.log('Invalid number, please enter a number between 1 and 7');
} else {
    switch (firstDayChoice) {
        case 'sunday':
            switch (dayNumber) {
                case 1:
                    console.log('Sunday');
                    break;
                case 2:
                    console.log('Monday');
                    break;
                case 3:
                    console.log('Tuesday');
                    break;
                case 4:
                    console.log('Wednesday');
                    break;
                case 5:
                    console.log('Thursday');
                    break;
                case 6:
                    console.log('Friday');
                    break;
                case 7:
                    console.log('Saturday');
                    break;
                default:
                    console.log('Invalid number, please enter a number between 1 and 7');
                    break;
            }
            break;
        case 'monday':
            switch (dayNumber) {
                case 1:
                    console.log('Monday');
                    break;
                case 2:
                    console.log('Tuesday');
                    break;
                case 3:
                    console.log('Wednesday');
                    break;
                case 4:
                    console.log('Thursday');
                    break;
                case 5:
                    console.log('Friday');
                    break;
                case 6:
                    console.log('Saturday');
                    break;
                case 7:
                    console.log('Sunday');
                    break;
                default:
                    console.log('Invalid number, please enter a number between 1 and 7');
                    break;
            }
            break;
        default:
            console.log('Invalid choice, please enter "Sunday" or "Monday"');
            break;
    }
}

// Task 2
let marks = Number(prompt('Enter your marks (0-100):'));

if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log('Invalid marks, please enter a number between 0 and 100');
} else {
    let grade;
    switch (true) {
        case (marks >= 90):
            grade = 'A';
            break;
        case (marks >= 80):
            grade = 'B';
            break;
        case (marks >= 70):
            grade = 'C';
            break;
        case (marks >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log(`Your Marks are: ${marks} and Your grade is: ${grade}`);
}


// --> Activity 4: Conditional (Ternary) Operator <--

let even_odd = Number(prompt('Enter the Number'))
even_odd % 2 === 0 ? console.log(`It's Even Number`) : console.log(`It's Odd Number`);


// --> Activity 5: Combining Conditions <--
let year = Number(prompt(`Enter a year to check whether it's leap or not:`));

if (isNaN(year)) {
    console.log('Invalid input, please enter a valid number');
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }

}


