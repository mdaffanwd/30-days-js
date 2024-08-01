// task 1:- 

let str = 'Assalamu Alaikum!!!'
localStorage.setItem('myStr', str)
const fromLS = localStorage.getItem('myStr')

// console.log(fromLS);

// task 2:- 
let obj = {
    username: 'mdaffanwd',
    platform: 'github'
}

localStorage.setItem('githubInfo', JSON.stringify(obj));
const gitInfo = localStorage.getItem('githubInfo');
const getOriginalObject = JSON.parse(gitInfo)
console.log(getOriginalObject);