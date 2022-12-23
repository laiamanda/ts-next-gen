// LET, VARS, CONST
const userName = 'Man';
// username = 'Amanda'
let age = 30; // similar to var

age = 29;

// function add(a: number, b: number){
//     var result;
//     result = a+ b;
//     return result;
// }

if(age > 20){
    var isOld = true;
    // let isOld = true;
}
// console.log(isOld);

//  ARROW => functions
const add = (a: number, b: number) => {
    a + b;
};

// const add = (add: number, b: number) => a + b;

console.log(add(2,5));

// const printOutput = (output: string | number) => {
//     console.log(output);
// }
const printOutput: (a: number | string) => void = (output: string | number) => console.log(output);
// printOutput(add(5,2));

const button = document.querySelector('button');
if( button ){
    button.addEventListener('click',(event) => {
        console.log(event);
    })
}

// PARAMETERS

const addP = (a: number, b: number = 1) =>  a + b;
// printOutput(add(5));

// SPREAD OPERATORS ...
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
    firstName:'Amanda',
    age1: 22,
};
const copiedPerson = {...person };

// REST PARAMETERS
const addList = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue)=> {
        return curResult + curValue;
    },0);
}
const addRest = addList(5,10,15,20);
console.log(addRest);

//Array Destructing
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies,hobby1,hobby2);

const { firstName: username, age1 } = person;
console.log(username, age);