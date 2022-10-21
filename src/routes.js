const express = require('express');
const router = express.Router();
const campus = require('./models/campus');
const Docent = require('./models/docent')



router.get('/', (req, res) => {
    console.log('/ route called');
    res.send('<h1>Welcome to my API, these are available routes:</h1>' +
        '<h2>/</h2>' +
        'where you right now' +
        '<hr/>' +
        '<h2>Campus</h2>' +
        'return all campuses in the database using .find()' +
        '<hr/>'
    );
});
router.get('/campus', async(req, res) => {
    console.log('/campus route called');
    try {
        res.send(await campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/campus/:id', async(req, res) => {
    console.log('/campus/:id route called');
    try {
        res.send(await campus.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/campus/create', async(req, res) => {
    console.log('/campus/create route called');
    try {
        res.send(await campus.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/campus/update/:id', async(req, res) => {
    console.log('/campus/update/:id route called');
    try {
        res.send(await campus.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.delete('/campus/delete/:id', async(req, res) => {
    console.log('/campus/delete/:id route called');
    try {
        res.send(await campus.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/docent', async(req, res) => {
    console.log('/docent route called');
    try {
        res.json(await Docent.find().populate('campussen').sort('voornaam'));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

})

module.exports = router;