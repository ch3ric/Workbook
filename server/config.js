path = require('path');

module.exports = {
  mongo: {
    dbUrl: 'https://api.mongolab.com/api/1',            // The base url of the MongoLab DB server
    apiKey: 'icwDJaJ9zFsPG5P-lb43O8yaimIj6p4H'          // Our MongoLab API key
  },
  security: {
    dbName: 'test-angular-app',                         // The name of database that contains the security information
    usersCollection: 'users'                            // The name of the collection contains user information
  },
  server: {
    listenPort: 80,                                     // The port on which the server is to listen (means that the app is at http://localhost:3000 for instance)
    securePort: 8433,                                   // The HTTPS port on which the server is to listen (means that the app is at https://localhost:8433 for instance)
    distFolder: path.resolve(__dirname, '../client/dist'),  // The folder that contains the application files (note that the files are in a different repository) - relative to this file
    staticUrl: '/static',                               // The base url from which we serve static files (such as js, css and images)
    cookieSecret: 'angular-app'                         // The secret for encrypting the cookie
  },
  languages: ['fr', 'en'],
  Mongo: {
    dbUris: ["mongodb://127.0.0.1:27017/test-angular-app"],
    options: {}
  },
};