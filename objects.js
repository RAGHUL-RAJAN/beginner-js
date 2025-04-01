// Object
let person = {
    firstname : 'Jack',
    lastname : 'sparrow'
}

// 1. Printing the property using Obj name

console.log(person.firstname)

/*
 * We cant declear like this console.log(person[lastname])
 * lastname should be with in single quote
*/




// 2. Printing the property by using Index value

console.log(person['lastname'])

person.firstname = 'raghul'

console.log(person.firstname)




// 3. Adding the property in the Obj

person.gender = 'male'

console.log(person.gender)

console.log(person)




// 4. Deleting the property in the Obj

delete person.gender

console.log(person)




// 5. Validating the property in the Obj

console.log('lastname' in person) // true 

console.log('gender' in person) // false




// 6. print all the values of JS Obj

for (let key in person){
    console.log(person[key])
}