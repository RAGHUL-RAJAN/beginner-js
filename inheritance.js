/*

1. inheritance are the main pillar in OOP
2. One class can inherit/acquire the properites,method of other class
3. The class inherit the property of other class is known as subclass
4. The class whos property are inherited is known as superclass

*/

import Person from "./class.js";
class Pet extends Person{

    // get location(){
    //     return "Bluecross"
    // }

    constructor(firstName,lastName){
        // class parent class constructor
        super(firstName,lastName)
    }

}

let pet = new Pet("sam","san")

pet.fullName()

console.log(pet.location)