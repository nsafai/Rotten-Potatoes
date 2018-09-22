var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { greeting: 'Hola', name: 'amigo', title: 'Rotten Potatoes' });
});

// create new route below
router.get('/test', (req, res) => {
  // render Handlebars template here...
    res.render('test', { data: 'test' })
});

module.exports = router;
