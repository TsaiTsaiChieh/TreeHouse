const express = require('express');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const app = express();
// Need to use the urlencode parser, pass in an object, turing off the parser's extended option
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());
// route the static server to specific location
// http://localhost:3000/static/stylesheets/style.css
app.use('/static', express.static('public'));

const sandboxNames = [
    { First: 'Paul', Last: 'Jones' },
    { First: 'David', Last: 'Smith' },
    { First: 'Jason', Last: 'Camp' },
    { First: 'Bella' },
    { First: 'Jones' }
];

// tell Express which template engine to use
// By default, Express will look in a folder called views in the root of project
// If u choose a name other than "views", u need to configure the app with the path to that folder.
app.set('view engine', 'pug');

const mainRouters = require('./routes'); // default: index.js
const cardRouters = require('./routes/cards');
app.use(mainRouters);
app.use('/cards', cardRouters);

// app.use((req, res, next) => {
//     req.message = 'This message made it!'
//     console.log('Hello');
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
//     next();
// });
// app.use((req, res, next) => {
//     console.log(req.message);
//     console.log('World');
//     next();
// });

// 404 error

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// 監聽 3000 port
app.listen(3000, () => {
    console.log('The app is running on localhost: 3000!');
});