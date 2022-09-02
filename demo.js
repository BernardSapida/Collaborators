let request = (websiteName) => {
    return new Promise((resolve, reject) => {
        console.log(`Making a request from ${websiteName}`);
        (websiteName == "Google") ? resolve("The request has been received!") : reject("The request didn't received by google.");
    });
}

let processRequest = async() => {
    try {
        let makeRequest = await request("Google");
        console.log(makeRequest);
        console.log("Process is successful!");
        console.log("Making another response...");
        makeRequest = await request("Facebook");
        console.log(makeRequest);
        console.log("Process is failed!");
    } catch(err) {
        console.log(err);
    }
}

processRequest();