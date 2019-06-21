// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
// const username = 'tsaichiehtsai';
// require https module
const https = require('https');
// require http module
const http = require('http');
// Print Error Message
function printError(error) {
    console.error(error.message);
}
// Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript.`;
    console.log(message);
}
// Connect to the API URL (https://teamtreehouse.com/username.json)
function getProfile(username) {
    try {
        const request = https.get(`https://wwwteamtreehouse.com/${username}.json`, response => {
            if (response.statusCode === 200) {
                // Read the data
                // console.dir(response);
                // console.log(response.statusCode);
                let body = '';
                response.on('data', d => {
                    // process.stdout.write(d);
                    // console.log('data', d);
                    body += d.toString();
                });
                response.on('end', () => {
                    try {
                        // Parse the data
                        const profile = JSON.parse(body);
                        // Print the data
                        // console.dir(profile);
                        // console.log(typeof (profile));
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        request.on('error', printError);
        //Problem with request: getaddrinfo ENOTFOUND wwwteamtreehouse.com


    } catch (error) {
        printError(error);
        //Invalid URL: teamtreehouse.com/tsaichiehtsai.json
    }
}
// getProfile('chalkers');
// getProfile('tsaichiehtsai');
// const users = ['chalkers', 'tsaichiehtsai'];

module.exports.get = getProfile;