// const flag = true

// if(!flag){
// console.log("condition satisfied")
// }else{
//     console.log("condition not satisfied")
// }


// let i = 0
// while (i<10){
//     i++
//     console.log(i)
// }

// do{
// i++
// }while(i>10);
//     console.log(i)

// for( let k =0;k<=10;k++){
//     console.log(k)
// }

// for(let k = 10; k >= 0; k--){
//     console.log(k)
// }

// for (let k = 10; k >=0; k--){
//     console.log("*")
// }


// let required = true
// while(required){
//     console.log(required)
//     required = false
// }


// for (let k = 1; k <= 10; k++){
//     if(k%2 == 0 || k%5 ==0 ){
//         console.log(k)
//     }
// }


// for (let k = 1; k <= 10; k++){
//     if(k%2 == 0 && k%5 ==0 ){
//         console.log(k)
//     }
// }


/*
// Printing the first 3 digits 

let n = 0
for(let k = 1; k <= 100; k++){

    if(k%2 == 0 && k%5 == 0){
        n++
        console.log(k)
        if(n == 3){
            break
        }
    }
}
console.log(n)

*/

let n = 0
for(let k = 1; k <= 100 ; k++){
    if( k%2 == 0 && k%5 ==0 ){
        n++
        console.log(k)
        if(n==3){
            break
        }
    }
}


