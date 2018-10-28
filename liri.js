require("dotenv").config();

var fs = require("fs");
//Add the code requireed to import keys.js and store it in a variable

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
//Access your keys information
var spotify = new Spotify(keys.spotify);
//Request Bands in Town API

var moment = require("moment");

//Request OMDB API

//Request Spotify API

var request = require("request");

//Argument 2 is concert, song, movie

//Argument 3 is name of concert, song or movie



//Set up functions. Use 'switch'
function concertThis() {
  var request = require("request");
  //Get user input for band
  var artist = process.argv[3];
  //Retrieve data from bandsintown
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events/?app_id=codingbootcamp";
  console.log(queryUrl);
  request(queryUrl, function (error, response, body){
    if (!error && response.statusCode === 200){
      var output = JSON.parse(body)
      console.log("Venue: " + output[0].venue.name + "\n" +
      "Location: " + output[0].venue.city + "\n" + 
      "Date: " + moment(output[0].datetime).format("MM/DD/YYYY")   
      )
    }
  })

}






//Get user input for band
//Search Bands In Town Artist Events API
//return Name of the venue, venue location, date MM/DD/YYYY



// spotify-this-song
//Get user input for song name
//Search Spotify and get back
//artist, song name, preview link, album
//If no song provided, then default The Sign by Ace of Base

// movie-this
function movieThis () {
  var request = require("request");
//Get user input for movie name. Default is "Mr. Nobody"
    var movieName = process.argv[3] || "Mr. Nobody";
 //Retrieve data from OMDB
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  console.log(queryUrl);
  request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Title: " + JSON.parse(body).Title + "\n" +
        "Release Year: " + JSON.parse(body).Year + "\n" +
        "IMDB Rating: " + JSON.parse(body).imdbRating + "\n" +
        "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[2].Value + "\n" +
        "Produced in: " + JSON.parse(body).Country + "\n" +
        "Language: " + JSON.parse(body).Language + "\n" +
        "Plot: " + JSON.parse(body).Plot + "\n" +
        "Actors: " + JSON.parse(body).Actors )
    }
    
  });
}




function spotifyThisSong(){
  var song = process.argv[3] || "The Sign";
    
  spotify.search({ type: 'track', query: song 
})
  .then(function(response) {
    var output = response.tracks.items;
    for (i = 0; i < output.length; i++) {
      var artists = output[i].artists;
      for (j = 0; j < artists.length; j++) {
        console.log("Artist: " + artists[j].name)
      }
      console.log("Song name: " + output[i].name + "\n" +
      "Spotify Preview Link: " + output[i].external_urls.spotify + "\n" +
      "Album: " + output[i].album.name + "\n\n"
      )
    }
   
  })
  .catch(function(err) {
    console.log(err);
  });
}



//do-what-it-says
function doWhatItSays(){
//take text from random.txt and use it to run spotify-this-song
fs.readFile("./random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  console.log(data);
  var song = data[1];

  // We will then re-display the content as an array for later use.
  console.log(dataArr);


});
}
//Switch case

var action = process.argv[2]
console.log(action);
switch (action) {
  case ('concert'):
    concertThis() 
    break
  case ('song'):
    spotifyThisSong()
    break
  case ('movie'):
    movieThis()
    break
  case ('doWhat'):
    doWhatItSays()
  break
  default:
    console.log("Enter 'concert', 'song', 'movie', or 'doWhat'.")
}