//Spread Operator
const numbers = [1,2,3]
const newNumbers = [...numbers, 4]
console.log(newNumbers) // prints [1,2,3,4]

const person = {
    name: 'max'
}
const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson) // prints {name: 'max', age: 28}

//Rest Operator
const filter = (...args) => { // converts all arguments to an array so array methods can be used
    return args.filter(el => el === 1)
}

console.log(filter(1,2,3))

//Destructuring 
// [num1, num2] = numbers
// console.log(num1, num2)

