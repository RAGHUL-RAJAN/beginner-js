

// // let totalmark = mark.reduce((sum,mark) => sum+mark,0)

// // console.log(totalmark)

// let mark = [12,32,43,43,44,54]
// var score = []

// // for( let i =0; i<= mark.length; i++){
    
// //     if(mark[i]%2 == 0){

// //         score.push(mark[i])
        
// //     }
// // }
// // console.log(score)
// var jack = []
// jack = mark.filter(score => score%2 == 0)

// console.log(jack)


// let marks = [12,32,12,44,83]

// console.log(marks.filter(score => score%2 == 0))


let score = [ 1, 2, 3, 4]

var evenscore = score.filter(score => score%2 == 0)
console.log(evenscore)

var multiple = evenscore.map(score=>score*3)
console.log(multiple)

let totalval = multiple.reduce((sum,val)=> sum+val,0)
console.log(totalval)

// console.log(multiple.reduce((sum,score)=> sum+score,0))


let car = [ 1, 2, 3, 4]

console.log((car.filter(score => score%2 == 0).map(score=>score*3)).reduce((sum,val)=> sum+val,0))
