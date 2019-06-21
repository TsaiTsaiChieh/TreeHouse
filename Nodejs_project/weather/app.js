const weather = require('./weather');

// const city = 'Beverly Hills';
const query = process.argv.slice(2).join('_').replace('_', ' ');
weather.get(query);

