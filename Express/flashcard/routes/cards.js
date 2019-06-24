const express = require('express');
const router = express.Router();

const { data } = require('../data/flashcardData.json');
// const data = require('../data/flashcardData.json').data;
const { cards } = data;
// const card = data.card;
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];


router.get('/', (req, res) => {
    const rand_num = Math.floor(Math.random() * cards.length);

    res.redirect(`/cards/${rand_num}`);

});
router.get('/:id', (req, res) => {
    const { side } = req.query; // side is the string, id?side=value
    const { id } = req.params;
    const text = cards[id][side];
    const { hint } = cards[id];
    const name = req.cookies.username;
    const templateData = { text, id, name };

    if (!side) { // (side=='null')
        // error: this is happening because when we redirected we didn't stop the execution of the rest of the function.
        return res.redirect(`/cards/${id}?side=question`);
    }
    if (side === "question") {
        templateData.hint = hint;
        templateData.link = "answer";
        templateData.show = "Answer";
    }
    else if (side === "answer") {
        templateData.link = "question";
        templateData.show = "Question";
    }
    res.render('card', templateData);
    // res.locals.prompt = 'Who is buried in Grant\'s tomb?';
    // res.locals.hint;
    // res.render('card', { colors });
});

module.exports = router;