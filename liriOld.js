require("dotenv").config();

const fs = require("fs");
// Retrieve keys.js
var keys = require("./keys.js");

var request = require("request");

var spotify = new Spotify(keys.spotify);

var Spotify = require('node-spotify-api');

 
var spotify = new Spotify({
  id: SPOTIFY_ID,
  secret: SPOTIFY_SECRET
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

