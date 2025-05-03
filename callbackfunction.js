
function greetingname(name, callback){
    const message = `Hello, ${name}`;
    callback(message)
}

function username(msg){
    console.log(msg)
}

greetingname("raghul",username)

