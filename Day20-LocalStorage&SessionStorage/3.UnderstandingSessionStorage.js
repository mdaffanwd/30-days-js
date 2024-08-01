// Task 5: 
let string = 'chai aur code'

sessionStorage.setItem('channel', string)

let ssData = sessionStorage.getItem('channel')
// console.log(ssData);
// localStorage.clear()

// task 6
let obj = {
    name: 'chai aur code',
    unique: true
}
sessionStorage.setItem('info', JSON.stringify(obj))

let info = sessionStorage.getItem('info')
let parsedInfo = JSON.parse(info)
// console.log(parsedInfo);