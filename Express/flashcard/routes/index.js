const express = require('express');
// min router in Express, can add middleware and routes to it.
const router = express.Router();

// 主頁面

router.get('/', (req, res) => {
    // res.send('<h1>I love treehouse</h1>');
    // replace send method with render in our index route
    // Do not need to specify the file extension here, Express knows to look for file with pug extension
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }

});
// sandbox
router.get('/sandbox', (req, res) => {
    res.render('sandbox', { sandboxNames });
});
// Hello 



router.get('/hello', (req, res) => {
    // res.send('<h1>Hello, JavaScript Developer!</h1>');
    // Going to read the cookie we've just send.
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});
router.post('/hello', (req, res) => {
    // console.dir(req.body);
    // Just get the JSON string, not the same /hello page.
    // res.json(req.body);
    // This will send a cookie to the browser after we submit the form
    res.cookie('username', req.body.username);
    res.redirect('/');
});
// Because in index.pug: form(action='/goodbye',method="post")
router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});


//export this router to reference it in the app JS file
module.exports = router;