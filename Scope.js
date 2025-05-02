
//  var function-scope or global-scope and can be re-declared and update
function VarExample(){
    var x =1;
    if(true){
       var x = 5;
        console.log(x)
    }
    console.log(x)
}

// VarExample()

// let block scope can be updated but not able to redeclare with in same scope

function letExample(){
    let x = 2;
    if(true){
        let x =  5
        console.log(x)
    }
    console.log(x)
}

// letExample()

// const block-scope cant reassign & redeclear value

function constExample(){
    const x = 5
    if(true){
        // y = 3
        console.log(x)

    }
    // x = 10
    console.log(x)
}

constExample()