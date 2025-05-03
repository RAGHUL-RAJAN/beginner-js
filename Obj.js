function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched")
        const data = "Sample Data"
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing : ",data)
}

fetchData(processData);