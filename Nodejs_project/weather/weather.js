const http = require('http');
const api = require('./api.json');

// Print out temp details
function printWeather(weather) {
    console.log(`Current temperature in ${weather.name} is ${weather.main.temp} F`);

}
// Print out error message
function printError(error) {
    console.error(error.message);
}


// const city = 'London';

//http://api.openweathermap.org/data/2.5/weather?zip=94040&APPID=bf721887f8ab821c9f1ab529f8c8f899
//http://api.openweathermap.org/data/2.5/weather?q=Beverly%20Hills&APPID=bf721887f8ab821c9f1ab529f8c8f899
function getWeather(query) {

    try {
        //2. lose http://
        const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${query},us&APPID=${api.key}`, response => {
            if (response.statusCode === 200) {
                let body = '';
                response.on('data', d => {
                    body += d.toString();
                });
                response.on('end', () => {
                    try {
                        // Parse data
                        const weather = JSON.parse(body);
                        // Check if the location was found before printing
                        // console.log(weather.name);

                        if (weather.name) {
                            // Print the data
                            printWeather(weather);
                        }
                        else {
                            const queryError = new Error(`The location "${query}" was not found`);
                            printError(queryError);
                        }
                    } catch (error) {
                        printError(error);
                        // key node app.js London-not
                        //3. Cannot read property 'temp' of undefined
                    }
                });

            } else {
                // Status Code Error
                // key node app.js London-not
                const message = `There was an error getting the weather for ${query} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        request.on('error', printError);
        // 1. Malformed URL like: wwwapi.openweathermap.org
        // error: getaddrinfo ENOTFOUND wwwapi.openweathermap.org
    } catch (error) {
        printError(error);

    }
}
module.exports.get = getWeather;