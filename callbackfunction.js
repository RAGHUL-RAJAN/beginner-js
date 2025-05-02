// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched")
//         const data = "Sample Data"
//         callback(data);
//     }, 2000);
// }

// function processData(data) {
//     console.log("Processing : ",data)
// }

// fetchData(processData);



function greetingname(name, callback){
    const message = `Hello, ${name}`;
    callback(message)
}

function username(msg){
    console.log(msg)
}

greetingname("raghul",username)

