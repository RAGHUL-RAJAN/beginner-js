class Person{
    age = 27
    // location = "canada"

    // property getters 
    
    get location(){
        return "canada"
    }

    // Consturctor is a method which executes by default when you create a Obj of the class
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    // Methods
   fullName(){
    console.log(this.firstName+this.lastName)
   }

}

// let person = new Person("raghul", "r")
// console.log(person.age)
// console.log(person.location)


// The class does not hold the firstname & lastname, during the run time we passing it through the constructor

// person.fullName()

export default Person