import _ from 'lodash-es';

const array = [1, 2, 2, 3, 4, 5, 6]
// getting unique values using lodash function
const uniqueValue = _.uniq(array)
console.log(uniqueValue);
// getting even numbers
const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
const evenNums = _.filter(numbers, num => num % 2 === 0)
console.log(evenNums, `Total even nums between 1 to 100 are:- ${evenNums.length}`);

// converting String to Array
const str = 'Assalamu Alaikum';
const toArray = _.toArray(str)
console.log(toArray);
