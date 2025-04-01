
// let marks = Array(6)

// let Mark = new Array(20,30,42,12,33,23)

// let score = [32,23,54,32,44,56]

// console.log(score[1])

// score[1] = 2
// console.log(score[1])

// console.log(score)

// console.log(score.length)

let score = [123, 125, 187, 166, 145, 125]
// console.log(score)
// console.log(score.length)

// console.log(score[1])
// score[1] = 199
// console.log(score[1])
// console.log(score)

// score.push(100)
// console.log(score)

// score.pop()
// console.log(score)

// score.unshift(11)
// console.log(score)

// console.log(score.indexOf(199))

// console.log(score.includes(155))

// console.log(score.slice(1,3))

// let marks = [35,66,87,91,37,42]

// for(let i =0 ; i < marks.length; i++){
//     console.log(marks[i])
// }


//  Adding the numbers inside the array

let num = [ 5,10,15,20,25,30,35,40]

// var sum = 0

// for( let k = 0 ; k < num.length; k++){

//     sum = sum + num[k]

// }
// console.log(sum)

console.log(num.reduce((sum,totalMarks) => sum+totalMarks,0))
