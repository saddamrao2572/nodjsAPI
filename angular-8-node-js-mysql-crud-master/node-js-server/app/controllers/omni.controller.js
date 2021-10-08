const db = require("../models");

const https = require('https');
const axios = require('axios').default;


var express = require('express');

var request = require('request');

//const request = require('request');
const options = {
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};
	
	
	
	
	
// prepare the header
var postheaders = {
    'Content-Type' : 'application/json',
    'Api-Key' : 'fa1541435e6c4f82a1a6dccd86bc43a2'
};

// the post options
var optionspost = {
    host : 'localhost:8080',
   
    path : 'https://api.omnivore.io/1.0/locations/i57z4qMT/menu?limit=2',
    method : 'GET',
    headers : postheaders
};

// Retrieve all restaurant from the api.
exports.omni = (req, res) => {
	
	 res.json({ message: "Welcome to omni application." });
	 
	 
	 
 
};









_EXTERNAL_URL = 'https://api.omnivore.io/1.0/locations/i57z4qMT?limit=2&api_key=fa1541435e6c4f82a1a6dccd86bc43a2';




// Retrieve all restaurant from the api.
exports.con = (req, res) => {
	
	// request(optionspost, function(err, res, body) {
		// let json = JSON.parse(body);
		// console.log(json);
	// });
	// Make a request for a user with a given ID
			// axios.get('https://api.omnivore.io/1.0/locations/i57z4qMT/menu?limit=2&api_key=fa1541435e6c4f82a1a6dccd86bc43a2',{
				// headers: {'Api-Key': 'fa1541435e6c4f82a1a6dccd86bc43a2'}
			// })
			  // .then(function (response) {
				// handle success
				// console.log(response);
			  // })
			  // .catch(function (error) {
				// handle error
				// console.log(error);
			  // })
			  // .then(function () {
				// always executed
			  // });
			// axios({
		  // method: 'get',
		  // url: 'https://api.omnivore.io/1.0/locations/i57z4qMT/menu?limit=2&api_key=fa1541435e6c4f82a1a6dccd86bc43a2',
		  // responseType: 'stream'
		// })
		  // .then(function (response) {
			// response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
			// console.log(response);
		  // });
	// res.json({ message: "Welcome to omni application." });
	
	
			// const options = {
			// url: 'https://www.reddit.com/r/funny.json',
			// method: 'GET',
			// headers: {
				// 'Accept': 'application/json',
				// 'Accept-Charset': 'utf-8',
				// 'User-Agent': 'my-reddit-client'
			// }
		// };

		 // request(optionspost, function(err, res, body) {
			 // let json = JSON.parse(body);
		 // console.log(json);
		 // });
		
	 https.get(_EXTERNAL_URL, (req) => {
    let data = '';
    
    // A chunk of data has been recieved.
    req.on('data', (chunk) => {
        data += chunk;
    });
    
    
    
    }).on("error", (req) => {
       
    console.log("Error: " + req.message);
    });
		
		


		
	
		
				
};


