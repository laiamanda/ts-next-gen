"use strict";
const userName = 'Man';
let age = 30;
age = 29;
if (age > 20) {
    var isOld = true;
}
const add = (a, b) => {
    a + b;
};
console.log(add(2, 5));
const printOutput = (output) => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}
const addP = (a, b = 1) => a + b;
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    name: 'Amanda',
    age: 22,
};
const copiedPerson = Object.assign({}, person);
const addList = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addRest = addList(5, 10, 15, 20);
console.log(addRest);
//# sourceMappingURL=app.js.map