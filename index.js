const people = [
    { name: 'Владилен', age: 25, budjet: 40000 },
    { name: 'Елена', age: 17, budjet: 3400 },
    { name: 'Игорь', age: 49, budjet: 50000 },
    { name: 'Михаил', age: 15, budjet: 1800 },
    { name: 'Василиса', age: 24, budjet: 25000 },
    { name: 'Виктория', age: 38, budjet: 2300 },
]

// FOR es5
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// !!! FOR...OF   более новый метод записи ES6 !!!
// for (let person of people) {
//     console.log(person)
// }

// FOR EACH  es5
// people.forEach(function(person) {
//     console.log(person)
// })

!!! FOR EACH  ES 6 !!!
people.forEach(person => console.log(person));

!!! MAP !!!
const newPeople = people.map(person => `${person.name} (${person.age})`);
    return person.name;
console.log(newPeople);

// Filter es5
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)

FILTER ES6 !!!
const adults = people.filter(person => person.age >= 18)
console.log(adults)

// REDUCE es5
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budjet;
// }
// console.log(amount)

!!! REDUCE ES 6 !!!
const amount = people.reduce((total,person) => total + person.budjet, 0)
console.log(amount)

FIND ES 6 !!!
const igor = people.find(person => person.name === 'Игорь');
console.log(igor)

FIND INDEX ES 6 !!!
const igorIndex = people.findIndex(person => person.name === 'Игорь');
console.log(igorIndex)


//============================

const amount = people
    .filter(person => person.budjet > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budjet)
        }
    })
    .reduce((total, person) => total + person.budget ,0)

console.log(amount)