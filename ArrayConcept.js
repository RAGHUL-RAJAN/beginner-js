const fruits = ["Apple", "Orange", "Mango"]
const fruit = ["Apple", "Orange", "Mango"]

// Access the element using index
console.log(fruits[1]);
console.log(fruits[0])

// Adding a element at the end
fruits.push("Banana")
console.log(fruits)         // [ 'Apple', 'Orange', 'Mango', 'Banana' ]

// removing element at the end
fruits.pop()
console.log(fruits)         //[ 'Apple', 'Orange', 'Mango' ]

//Adding at the begining
fruits.unshift("Jackfruite");
console.log(fruits)         //[ 'Jackfruite', 'Apple', 'Orange', 'Mango' ]

// removing at the begining of the array 
fruits.shift()
console.log(fruits)         //[ 'Apple', 'Orange', 'Mango' ]

// find the element using index
const index = fruits.indexOf("Apple")
console.log(index)              // 0

// Remove an element using Splice (index)

const indexs =fruit.splice(1,1)
console.log(indexs)         // [ 'Orange' ]
