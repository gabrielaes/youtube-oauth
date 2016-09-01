'use strict';

var YouTubeAPIService = require('./youtubeapiservice');
var youTubeAPIService = new YouTubeAPIService();

youTubeAPIService.initialize('Client');
//retrieve the URL for the consent screen.
console.log(youTubeAPIService.generateAuthURL());