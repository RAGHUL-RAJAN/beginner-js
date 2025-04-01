// filter the array with even numbers and multiple by 3 

let mark = [ 1, 3, 5, 6, 8,12, 26]

console.log((mark.filter(score => score%2 == 0).map(score => score*3)).reduce((sum,val)=>sum+val,0))


let score = [2,3, 5, 63,44,23,86,10,11]

var final = score.filter(score => score%2 ==0)

console.log(final)

// console.log(final.sort())

console.log(final.sort((a,b) => a-b))

let fruits = ["banana", "apple", "orange", "jackfruite","papaya"]

console.log(fruits.sort())


let age = [ 2,32,18,12, 5,35,28 ]

console.log(age.sort())

console.log(age.sort((a,b)=> a-b))


