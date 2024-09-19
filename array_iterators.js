// Array functions

// .forEach() 
// executes a function on each item of an array
// Basically a for loop, IDK how this is different from for (element of array)
// Modifies original

const numbers = [1, 2, 3, 4, 5]

numbers.forEach((number) => {
    console.log(number)
})
// Will console.log 1 2 3 4 5

numbers.forEach((number) => {console.log(number * 1.1)})
// Multiplies all numbers by 1.1

// .map() 
// will loop over a given array and produce a NEW ARRAY
// with new values based on logic you define in the function passed into it
// Good for working with, rendering, and displaying data

const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordLengths = words.map((word) => {
    return word.length
}) // New array containing the length of each word instead

console.log(wordLengths)
//  will print [ 3, 5, 2, 5, 4, 2, 6 ]


// Map creates new array, forEach modifies original array


// .filter() takes array, and creates new array that only contains certain items
// In accordance to the function passed into it
// Filter has weird syntax, so you MUST use a return statement

//const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const shortWords = words.filter((word) => { 
    return word.length <= 3 
}) // New array of words 3 letters or less

console.log(shortWords) 
// Prints [ 'the', 'is', 'an' ]

wordLengths.filter((word) => {console.log(word.length <= 3)})
// This prints an array of true or false depending on if the condition was met



// .reduce() takes entire array, reduces it ot a single value.
// Accumulates the total value
// Good for price checkouts, say you're buying a ton of items...
// e-commerce has the .reduce() function in its functionality
// Single value can also be an object or array

// const numbers = [1, 2, 3, 4, 5]

// Variable stores the .reduce function FYI
const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value
}, 0)

console.log(sum)
//  will print 15

// .some()
// Returns a boolean if at least one item in array meets the conditions (true/false)

// const numbers = [1, 2, 3, 4, 5]

// Variable stores the .reduce function FYI
const greaterThanThree = array.some((num) => {
    return num > 3
})

console.log(greaterThanThree) 
//will print true


// More here https://github.com/ShirtHanger/u1_array_iterators