
const https = require('https');
 
_EXTERNAL_URL = 'https://api.omnivore.io/1.0/locations/i57z4qMT?limit=2&api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
_EXTERNAL_URL_menu = 'https://api.omnivore.io/1.0/locations/i57z4qMT/menu/categories?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
_EXTERNAL_URL_tickets =  'https://api.omnivore.io/1.0/locations/i57z4qMT/tickets?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';


const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
    let data = '';
	
	
	
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callExternalApiUsingHttpMenu = (callback) => {
    https.get(_EXTERNAL_URL_menu, (resp) => {
    let data = '';
	
	
	
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

const callExternalApiUsingHttpTickets = (callback) => {
    https.get(_EXTERNAL_URL_tickets, (resp) => {
    let data = '';
	
	
	
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;
module.exports.callApiMenu = callExternalApiUsingHttpMenu;
module.exports.callApiTickets = callExternalApiUsingHttpTickets;