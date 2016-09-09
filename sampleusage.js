'use strict';

var YouTubeAPIService = require('./youtubeapiservice');
var youTubeAPIService = new YouTubeAPIService();

//use the below to initialize the youTubeAPIService with the client ID and secret
//when you don't yet have an access token or a refresh token.
// youTubeAPIService.initialize('Client');

// use the below to retrieve the URL for the consent screen.
// console.log(youTubeAPIService.generateAuthURL());

//use the below to retrieve a refresh token using the code you received in the step above:
// youTubeAPIService.getToken();

//use the below to initialize the youtube property on your service
//and set the authorization for the youtube API.
youTubeAPIService.initialize('Client');
youTubeAPIService.initialize('Tokens');