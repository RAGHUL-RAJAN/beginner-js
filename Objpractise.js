let person = {
    firstname : 'raghul',
    lastname : 'r',
        age : '27',
        fullname : function()
        {
            console.log(this.firstname+this.lastname)
        }
}

console.log(person.fullname())
console.log(person.lastname)