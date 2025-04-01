let person = {
    firstname : 'raghul',
    lastname : 'r',
        age : '27',
        fullname : function()
        {
            console.log(this.firstname+this.lastname)
        }
}

person.fullname()
console.log(person.lastname)