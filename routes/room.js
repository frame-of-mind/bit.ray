var express = require('express');
var router = express.Router();

/* GET room hub page. */
router.get('/', function(req, res, next) {
    res.render('room-hub', { title: 'Room-hub' });
});

/* GET room hub page. */
router.get('/:id', function(req, res, next) {
    res.render('room', { title: 'Room' });
});

module.exports = router;
