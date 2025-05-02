// const person = {
//     "name":jack,
//     // const greeting : function{
//     //     console.log('welcome to chennai')
//     // }
// }

const person ={
    name :"Jack",
    age : 23,
    greetings : function(){
        console.log("Hello, My name is "+ this.name)
    }
}

person.greetings();


// Function
function greeting(){
    console.log("Hello World")
}

greeting()

const wish = function(){
    console.log("Good morning")
}


wish()