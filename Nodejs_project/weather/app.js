const weather = require('./weather');
// query = London''
// query = 'Beverly Hills';
// query = 'Beverly_Hills';
const query = process.argv.slice(2).join('_').replace('_', ' ');
weather.get(query);

