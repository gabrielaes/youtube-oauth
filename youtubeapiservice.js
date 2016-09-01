'use strict';

var Promise = require('bluebird');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var REDIRECT_URL = process.env.REDIRECT_URL;
var refresh_token = process.env.refresh_token;

var YouTubeAPIService = function YouTubeAPIService(){
  this.OAuth2Client = null;
  this.youtube = null;
};

YouTubeAPIService.prototype.initialize = function initialize(what){
  var self = this;
  if(what==='Client'){
    self.OAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
    console.log(self.OAuth2Client);
  }else if(what==='Tokens'){
    self.OAuth2Client.setCredentials({
      refresh_token: refresh_token
    });
    return new Promise(function(resolve, reject){
      self.refreshAccessToken()
        .then(function(tokens){
          self.youtube = google.youtube({
            version: 'v3',
            auth: self.OAuth2Client
          });
        })
        .catch(function(err){
          //do something with the error message
          reject('error in authenticating YouTube oAuth client');
        })
    });
  }
};

YouTubeAPIService.prototype.generateAuthURL = function generateAuthURL(){
  var self = this;
  var url = self.OAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://gdata.youtube.com'
  });
  return url;
};

YouTubeAPIService.prototype.getToken = function getToken(code){
  var self = this;
  self.OAuth2Client.getToken(code, function(err, tokens){
    console.log(tokens);
  });
};

module.exports = YouTubeAPIService;