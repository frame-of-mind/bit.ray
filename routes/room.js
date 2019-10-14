var express = require('express');
var router = express.Router();

/* GET room hub page. */
router.get('/', function(req, res, next) {
    console.log("req: ", req.query.uid);
    // console.log("res: ", res);
    res.render('room-hub', { title: 'Betrayer - Room-hub', uid: req.query.uid });
});

/* GET room hub page. */
router.get('/:id', function(req, res, next) {
    res.render('room', { title: 'Betrayer - Room' });
});

module.exports = router;
