const profile = require('./profile');


const users = process.argv.slice(2);
// users.forEach(getProfile);
users.forEach(profile.get);
// node app.js chalkers tsaichiehtsai